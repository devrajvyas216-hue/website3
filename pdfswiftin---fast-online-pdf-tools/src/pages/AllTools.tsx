import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { ALL_TOOLS } from '../constants';

export default function AllTools() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      <SEO 
        title="All PDF Tools - PDFSwiftin Online PDF Suite" 
        description="Explore our full range of 20+ free online PDF tools. Merge, split, protect, and convert PDFs with PDFSwiftin's fast browser-side processing."
        keywords="all pdf tools, free online pdf tools, merge pdf, split pdf, protect pdf, image to pdf, compress pdf, pdf to word"
      />

      <div className="mb-12 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <Grid className="text-indigo-600" size={28} /> All PDF Tools
            </h1>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl">
              Everything you need to manage your PDF documents efficiently. All tools run locally in your browser for maximum privacy.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold self-start">
             <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
             20 Tools Available
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ALL_TOOLS.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03 }}
          >
            <Link 
              to={tool.path}
              className="group block h-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-400 transition-all flex flex-col relative overflow-hidden"
            >
              {tool.premium && (
                <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-[8px] font-black uppercase px-2 py-1 flex items-center gap-1 rounded-bl-lg shadow-sm">
                   <Lock size={8} /> Pro
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl ${tool.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <tool.icon size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 truncate">{tool.name}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                {tool.desc}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-auto">
                Open Tool <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 p-10 bg-indigo-900 rounded-3xl border border-indigo-800 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Grid size={120} />
        </div>
        <h3 className="text-xl font-bold mb-4">Enterprise Grade Document Management</h3>
        <p className="text-indigo-200 text-sm max-w-2xl mx-auto mb-8">
          Join 50k+ users who trust PDFSwiftin for their daily document workflows. Secure, fast, and 100% browser-side.
        </p>
        <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg">
          Meet the Team
        </Link>
      </section>
    </div>
  );
}
