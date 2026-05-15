import React from 'react';
import { useAuth } from '../AuthContext';
import { Lock, Apple, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface PremiumGateProps {
  children: React.ReactNode;
}

export default function PremiumGate({ children }: PremiumGateProps) {
  const { user, loginWithGoogle } = useAuth();

  if (user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 p-8 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100"
      >
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Lock size={32} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Premium Features Locked.</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-10">
          This advanced PDF utility is part of our Swift Pro suite. Sign in for free to unlock 20+ specialized tools and faster local processing.
        </p>

        <div className="space-y-4">
          <button 
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white border border-slate-200 text-slate-800 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm group"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Continue with Google
          </button>
          <button 
            className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-black text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-sm group"
            onClick={() => alert("Apple Sign-in is coming soon to the preview environment!")}
          >
            <Apple size={20} className="group-hover:scale-110 transition-transform" />
            Continue with Apple
          </button>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-slate-400 font-medium">Coming Soon</span>
            </div>
          </div>
          <button 
            disabled
            className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-slate-50 text-slate-400 rounded-xl font-bold cursor-not-allowed opacity-50"
          >
            <Mail size={18} />
            Continue with Email
          </button>
        </div>
        
        <p className="mt-8 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
           By signing up, you agree to our <a href="/terms" className="text-indigo-600 underline">Terms of Service</a>.
        </p>
      </motion.div>
    </div>
  );
}
