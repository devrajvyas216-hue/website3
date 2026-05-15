import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  User,
  Auth
} from 'firebase/auth';
import { initializeApp, FirebaseApp } from 'firebase/app';
import firebaseConfig from '../firebase-applet-config.json';

// Lazy initialization to avoid startup crashes if config is missing or environment is unstable
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let googleProvider: GoogleAuthProvider | null = null;

function getFirebase() {
  if (!app) {
    try {
      if (firebaseConfig && firebaseConfig.apiKey) {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        googleProvider = new GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: 'select_account' });
      }
    } catch (error) {
      console.warn('Firebase configuration not found. Auth features will be disabled.');
    }
  }
  return { auth, googleProvider };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { auth } = getFirebase();
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    const { auth, googleProvider } = getFirebase();
    if (!auth || !googleProvider) {
      console.error('Firebase Auth or Google Provider not initialized. Check firebase-applet-config.json');
      alert("Authentication setup is incomplete. Please ensure your Firebase credentials are correct.");
      return;
    }

    try {
      console.log('Attempting Google Sign-In...');
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Login successful for:', result.user.email);
    } catch (error: any) {
      console.error('Firebase Login Error:', error.code, error.message);
      
      if (error.code === 'auth/unauthorized-domain') {
        alert("This domain is not authorized in your Firebase console. Please add your Vercel URL to 'Authorized Domains' in Firebase Authentication settings.");
      } else if (error.code === 'auth/popup-blocked') {
        alert("Sign-in popup was blocked by your browser. Please allow popups for this site.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
    }
  };

  const logout = async () => {
    const { auth } = getFirebase();
    if (!auth) return;

    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
