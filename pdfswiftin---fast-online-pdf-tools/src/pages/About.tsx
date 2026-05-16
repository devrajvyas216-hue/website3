import SEO from '../components/SEO';
import { Target, Shield, Zap, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <SEO 
        title="About our PDF Tool Free for Students and All - PDFSwift" 
        description="Learn why PDFSwift is the #1 PDF tool free for students and all. Fast, private, and secure online editing built for everyone."
      />
      
      <div className="mb-16">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">The Ultimate PDF Tool Free for Students and All.</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          PDFSwift was created to be the most accessible <strong>pdf tool free for students and all</strong>. Most tools claim to be fast, but we focus on actual performance by running everything in your browser.
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
                Using modern WebAssembly and optimized JavaScript, PDFSwift manipulates complex PDFs at hardware speeds.
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
      
      {/* About Image Section */}
      <div className="mb-20 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-1330084bc6f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Professional productivity workspace" 
          className="w-full h-[400px] object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
      
      <div className="p-12 bg-slate-900 text-white rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Free PDF Editor Roadmap</h2>
        <p className="text-slate-400 mb-8 max-w-2xl text-sm leading-relaxed">
          PDFSwift focuses on <strong>long-tail PDF keywords</strong>. While giants fight for generic terms, we dominate the niche 
          utilities where student-friendly pricing (Free) and privacy matter most.
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
