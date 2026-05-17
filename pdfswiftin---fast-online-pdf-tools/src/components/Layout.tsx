import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Hammer, Github, Shield, Scale, FileText, FilePlus, FileMinus, Lock, Image as ImageIcon, LayoutDashboard, FileCheck, User as UserIcon, LogOut, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_TOOLS } from '../constants';
import mascotImg from '../assets/images/pdfswift_cat_mascot_1778995133209.png';

const sidebarMainLinks = [
  { name: 'Home', path: '/', icon: LayoutDashboard },
  { name: 'All PDF Tools', path: '/all-tools', icon: Grid },
  { name: 'Guides & Blog', path: '/blog', icon: FileText },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans overflow-hidden selection:bg-orange-100 selection:text-orange-900">
      {/* Top Navigation Bar */}
      <header className="h-20 bg-white border-b border-orange-100 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src={mascotImg} 
                alt="PDFswift Cat Mascot" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">PDFswift</span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] leading-none">PDF Solutions for Everyone</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 ml-4">
            {sidebarMainLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  location.pathname === link.path ? 'text-orange-600 bg-orange-50' : 'text-slate-500 hover:text-orange-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex-1 max-w-lg px-8 hidden lg:block" role="search">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search PDF tools..." 
              aria-label="Search PDF tools"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-400 focus:bg-white outline-none transition-all shadow-sm"
            />
            <div className="absolute left-3 top-3 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/about"
            className="px-6 py-2.5 bg-orange-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 active:scale-95"
          >
            About Us
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-0 relative scroll-smooth bg-brand-secondary">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-14 bg-white border-t border-orange-100 px-6 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-2">
          <img 
            src={mascotImg} 
            alt="" 
            className="w-6 h-6 grayscale opacity-50"
          />
          <p className="text-[10px] text-slate-400 font-bold tracking-tight uppercase">
            © {new Date().getFullYear()} PDFswift – Purr-fect PDF Solutions.
          </p>
        </div>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-[10px] font-bold text-slate-500 hover:text-orange-600 uppercase tracking-widest flex items-center gap-1">
            <Shield size={10} aria-hidden="true" /> Privacy
          </Link>
          <Link to="/terms" className="text-[10px] font-bold text-slate-500 hover:text-orange-600 uppercase tracking-widest flex items-center gap-1">
            <Scale size={10} aria-hidden="true" /> Terms
          </Link>
          <Link to="/about" className="text-[10px] font-bold text-slate-500 hover:text-orange-600 uppercase tracking-widest">
            Why PDFswift?
          </Link>
        </div>
      </footer>
    </div>
  );
}
