import React from 'react';
import { Link } from 'react-router-dom';
import { FilePlus, FileMinus, Lock, Image as ImageIcon, ArrowRight, Zap, ShieldCheck, FileCheck, Search, ChevronRight, Apple, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ALL_TOOLS } from '../constants';
import { useAuth } from '../AuthContext';

export default function Home() {
  const { loginWithGoogle } = useAuth();
  
  // Show first 8 tools on home for better density
  const featuredTools = ALL_TOOLS.slice(0, 8);

  const blogTopics = [
    { title: "How to Merge PDF Files Without Losing Quality", slug: "merge-pdf-quality" },
    { title: "Best Practices for Secure PDF Password Protection", slug: "secure-pdf-protection" },
    { title: "Everything You Need to Know About PDF Compression", slug: "pdf-compression-guide" }
  ];

  return (
    <>
      <SEO 
        title="PDFSwiftin - Free Online PDF Tools | 20+ PDF Utilities" 
        description="The fastest online PDF suite. Merge, Split, Compress, and Convert 20+ PDF formats. 100% private browser-side processing."
        keywords="free pdf tools, merge pdf online, split pdf free, protect pdf password, online pdf utility, pdf to word, compress pdf"
      />
      
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter sm:text-5xl">PDF Solutions Simplified.</h1>
          <p className="text-slate-500 text-lg mt-2 max-w-xl">Professional tools for fast, secure, and private PDF manipulation. 20+ utilities at your fingertips.</p>
        </div>
        <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm shrink-0 self-start md:self-end">
           <Zap size={14} className="text-amber-500" />
           <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Swift Engine V4.2</span>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <QuickStat icon={ShieldCheck} label="Privacy" value="Browser-Side" color="text-indigo-600" />
        <QuickStat icon={Zap} label="Processing" value="Instant" color="text-amber-600" />
        <QuickStat icon={FileCheck} label="Fidelity" value="100% Asset" color="text-emerald-600" />
        <QuickStat icon={Lock} label="Security" value="AES-256" color="text-blue-600" />
      </div>

      {/* Tools Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2"> 
           Popular Tools <ChevronRight size={24} className="text-indigo-600" /> 
        </h2>
        <Link to="/all-tools" className="text-xs font-black text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg uppercase tracking-widest transition-colors">
          Explore All 20 Tools
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
        {featuredTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={tool.path}
              className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all h-full flex flex-col relative overflow-hidden"
            >
              {tool.premium && (
                <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-[8px] font-black uppercase px-2 py-1 flex items-center gap-1 rounded-bl-lg">
                   <Lock size={8} /> Pro
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl ${tool.accent} group-hover:scale-110 transition-transform shadow-sm`}>
                  <tool.icon size={24} />
                </div>
                <ArrowRight size={18} className="text-slate-200 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{tool.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">
                {tool.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Auth Banner */}
      <section className="mb-20 bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Unlock the Full Suite.</h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
               Create a free Swift account to unlock pro-grade PDF compression, document conversion, and security unlocks. 
               All processing remains 100% private in your browser.
             </p>
             <div className="flex flex-wrap gap-4">
                <button 
                  onClick={loginWithGoogle}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  Sign up with Google
                </button>
                <button 
                  onClick={() => alert("Apple Sign-in is coming soon!")}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center gap-3 shadow-lg"
                >
                   <Apple size={20} />
                   Apple ID
                </button>
             </div>
           </div>
           <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-indigo-400 mb-2 uppercase">Pro Feature</p>
                    <p className="font-bold">PDF to Excel</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-emerald-400 mb-2 uppercase">Pro Feature</p>
                    <p className="font-bold">HTML to PDF</p>
                 </div>
              </div>
              <div className="space-y-4 translate-y-8">
                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-amber-400 mb-2 uppercase">Pro Feature</p>
                    <p className="font-bold">Compress PDF</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-red-400 mb-2 uppercase">Pro Feature</p>
                    <p className="font-bold">Unlock PDF</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-12">
          <article className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight underline decoration-indigo-500 decoration-8 underline-offset-[12px]">The Ultimate PDF Powerhouse.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              PDFSwiftin isn't just another online converter. We've built a high-performance engine that runs directly in your browser, bypassing the need for server-side processing which often compromises privacy and speed. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <h4 className="font-black text-slate-900 mb-4 uppercase tracking-widest text-xs">Privacy Protocol</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Your files never touch our servers. We use WebAssembly to perform heavy-duty PDF manipulations locally on your machine.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <h4 className="font-black text-slate-900 mb-4 uppercase tracking-widest text-xs">Fast Conversion</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Instant processing means no waiting for uploads or downloads. The moment you drop a file, it's ready for manipulation.</p>
               </div>
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <FileText size={20} className="text-indigo-400" />
               Latest Guides
            </h3>
            <ul className="space-y-6">
              {blogTopics.map(topic => (
                <li key={topic.slug} className="group">
                  <Link to={`/blog/${topic.slug}`} className="text-sm font-bold text-slate-300 hover:text-white flex items-start gap-3 group-hover:translate-x-1 transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-white/10">
               <Link to="/blog" className="text-[10px] font-black text-indigo-400 hover:text-white uppercase tracking-widest flex items-center gap-2">
                 Visit the Swift Blog <ArrowRight size={12} />
               </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function QuickStat({ icon: Icon, label, value, color }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
      </div>
      <p className={`text-2xl font-black tracking-tight ${color}`}>{value}</p>
    </div>
  );
}
