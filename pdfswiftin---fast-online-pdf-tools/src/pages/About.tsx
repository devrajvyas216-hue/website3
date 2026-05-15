import SEO from '../components/SEO';
import { Target, Shield, Zap, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <SEO 
        title="About PDFSwiftin - The Future of PDF Manipulation" 
        description="Learn why PDFSwiftin is the fastest and most private PDF tool suite on the web. Built with modern web standards and a privacy-first approach."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">The PDF Utility Suit Built for Speed.</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          PDFSwiftin was born from a simple observation: most "fast" PDF tools aren't actually fast when you consider the upload time. 
          We built a suite that runs where it matters—in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Absolute Privacy</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                By processing files locally, your sensitive data never touches a server. We don't just "encrypt" your files; we never see them.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Swift Engine</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Using modern WebAssembly and optimized JavaScript, PDFSwiftin manipulates complex PDFs at hardware speeds.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">SEO Architecture</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every component is built for speed and discoverability. Our tools rank high because they perform perfectly.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">User Focused</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                No ads, no distractions, and no registration required. Just simple, high-performance tools for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 bg-slate-900 text-white rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical SEO Roadmap</h2>
        <p className="text-slate-400 mb-8 max-w-2xl text-sm leading-relaxed">
          PDFSwiftin focuses on <strong>low-competition PDF keywords</strong>. While giants fight for "PDF Editor," we dominate the niche 
          utilities where speed and privacy matter most.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
          <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400 border border-white/10">Next-Gen Speed</div>
          <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-white/10">pdf-lib Engine</div>
          <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-white/10">No Tracking</div>
        </div>
      </div>
    </div>
  );
}
