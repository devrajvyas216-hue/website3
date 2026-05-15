import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Fix for "Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter"
// This happens in some restricted environments (like iframes) when libraries try to patch fetch.
try {
  if (typeof window !== 'undefined' && window.fetch) {
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (desc && !desc.writable && desc.configurable) {
      Object.defineProperty(window, 'fetch', {
        value: window.fetch,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }
  }
} catch (e) {
  console.warn('Could not patch fetch:', e);
}

import App from './App.tsx';
import './index.css';
import { AuthProvider } from './AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
