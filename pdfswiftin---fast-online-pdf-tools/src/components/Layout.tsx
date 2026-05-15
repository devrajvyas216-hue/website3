import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Hammer, Github, Shield, Scale, FileText, FilePlus, FileMinus, Lock, Image as ImageIcon, LayoutDashboard, FileCheck, User as UserIcon, LogOut, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_TOOLS } from '../constants';
import { useAuth } from '../AuthContext';

const sidebarMainLinks = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'All PDF Tools', path: '/all-tools', icon: Grid },
  { name: 'Guides & Blog', path: '/blog', icon: FileText },
];

export default function Layout() {
  const location = useLocation();
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Navigation Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sm shadow-indigo-200">
              <FileCheck size={18} />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter">PDFSwiftin</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {sidebarMainLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  location.pathname === link.path ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex-1 max-w-xl px-12 hidden lg:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search 20+ PDF tools..." 
              className="w-full bg-slate-100 border-none rounded-2xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
            <div className="absolute left-3 top-2.5 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Protocol V4.2</span>
             </div>
          </div>

          <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end hidden lg:flex">
                <span className="text-xs font-bold text-slate-800 leading-none">{user.displayName}</span>
                <span className="text-[10px] text-slate-400 font-medium">{user.email}</span>
              </div>
              <div className="relative group">
                <button className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon size={18} className="text-slate-500" />
                  )}
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-2 invisible group-hover:visible translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all z-[60]">
                   <button 
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold transition-colors"
                   >
                     <LogOut size={14} /> Sign Out
                   </button>
                </div>
              </div>
            </div>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm active:scale-95"
            >
              Sign Up Free
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 shrink-0 hidden lg:flex">
          <nav className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Swift Core</p>
              <div className="space-y-1">
                {sidebarMainLinks.map((tool) => {
                  const isActive = location.pathname === tool.path;
                  return (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-all ${
                        isActive 
                          ? 'bg-indigo-50 text-indigo-700' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <tool.icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                      {tool.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">PDF Operations</p>
              <div className="space-y-1">
                {ALL_TOOLS.map((tool) => {
                  const isActive = location.pathname === tool.path;
                  return (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-all group ${
                        isActive 
                          ? 'bg-indigo-50 text-indigo-700 font-bold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <tool.icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
                      <span className="flex-1 truncate">{tool.name}</span>
                      {tool.premium && (
                        <Lock size={10} className="text-amber-500" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="mt-auto p-4 bg-slate-900 rounded-xl text-white">
            <div className="flex items-center gap-2 mb-2">
               <Shield size={12} className="text-indigo-400" />
               <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Security Guard</p>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-400">
              WebCrypto AES-256 enabled for all local operations.
            </p>
          </div>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-8 relative scroll-smooth bg-slate-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-10 bg-white border-t border-slate-200 px-6 flex items-center justify-between shrink-0 z-50">
        <p className="text-[10px] text-slate-400 font-medium tracking-tight">
          © {new Date().getFullYear()} PDFSwiftin. Pro-grade PDF tools at the speed of thought.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-[10px] font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest flex items-center gap-1">
            <Shield size={10} /> Privacy
          </Link>
          <Link to="/terms" className="text-[10px] font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest flex items-center gap-1">
            <Scale size={10} /> Terms
          </Link>
          <Link to="/about" className="text-[10px] font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest">
            Why PDFSwiftin?
          </Link>
        </div>
      </footer>
    </div>
  );
}
