import React from 'react';
import { Link } from 'react-router-dom';
import { FilePlus, FileMinus, Lock, Image as ImageIcon, ArrowRight, Zap, ShieldCheck, FileCheck, Search, ChevronRight, Apple, FileText, Grid } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ALL_TOOLS } from '../constants';
import mascotImg from '../assets/images/pdfswift_cat_mascot_1778995133209.png';

export default function Home() {
  
  // Show all tools for a grid layout similar to PDF24
  const tools = ALL_TOOLS;

  return (
    <>
      <SEO 
        title="Solutions for All PDF Problems – Free PDF Tools Online" 
        description="PDFswift has solutions for all PDF problems. Merge PDF, Split PDF, Compress PDF, Convert Image to PDF, and use many other free PDF tools online. 100% free, fast, easy, and secure for students and professionals."
        keywords="pdf problems, merge pdf, split pdf, compress pdf, image to pdf, free pdf tools online, pdfswift"
      />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-orange-100 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 clip-path-hero hidden lg:block"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={12} className="animate-pulse" /> 100% Browser-Side Processing
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
              PDF Solutions for <span className="text-orange-500">Every Problem.</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-xl mb-10 leading-relaxed font-medium">
              PDFswift is the purr-fect suite of free PDF tools. Fast, secure, and works entirely in your browser. No uploads, no waiting.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <a href="#tools" className="px-10 py-5 bg-orange-500 text-white rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-200 active:scale-95 flex items-center gap-3">
                 Explore PDF Toolbox <ArrowRight size={18} />
               </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-400/20 blur-[100px] rounded-full"></div>
              <img 
                src={mascotImg} 
                alt="PDFswift Cat" 
                className="w-72 h-72 md:w-96 md:h-96 object-contain relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section id="tools" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our PDF Toolbox</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Grid size={14} /> {tools.length} Tools Available
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
            >
              <Link 
                to={tool.path}
                className="group p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-orange-300 hover:bg-orange-50/50 transition-all flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-orange-100"
              >
                <div className="w-24 h-24 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-orange-100/50 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform opacity-0 group-hover:opacity-100"></div>
                  {tool.image ? (
                    <img 
                      src={tool.image} 
                      alt="" 
                      className="w-full h-full object-contain relative z-10" 
                      loading="lazy"
                    />
                  ) : (
                    <div className={`p-4 rounded-2xl ${tool.accent} relative z-10`}>
                      <tool.icon size={28} className="text-orange-600" />
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-1 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{tool.name}</h3>
                <p className="text-[10px] text-slate-400 font-medium leading-tight line-clamp-2">
                  {tool.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-y border-orange-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Privacy</p>
                <p className="font-black text-slate-900">100% Local</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Speed</p>
                <p className="font-black text-slate-900">Instant Processing</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <FileCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Quality</p>
                <p className="font-black text-slate-900">High Fidelity</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Lock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Security</p>
                <p className="font-black text-slate-900">End-to-End</p>
              </div>
           </div>
        </div>
      </section>

      {/* About & Trust Section (Bottom as requested) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-black uppercase tracking-widest">
              <ShieldCheck size={14} /> PURR-FECT PRIVACY
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              The Best Online PDF Tools <br />
              <span className="text-orange-500 text-6xl">100% Free for You.</span>
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-500 text-lg leading-relaxed">
                Finding a reliable <strong>merge PDF online</strong> tool or a secure way to <strong>compress PDF files</strong> shouldn't come with hidden costs or privacy risks. PDFswift was built to solve these exact problems. Whether you need to <strong>convert image to PDF</strong>, <strong>split PDF pages</strong>, or <strong>protect PDF with password</strong>, our suite handles everything directly in your browser.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mt-4">
                Why choose browser-side processing? Traditional PDF converters upload your confidential bank statements, IDs, and legal contracts to remote servers. PDFswift changes the game. By using advanced WebAssembly technology, we perform complex <strong>PDF to Word conversion</strong> and <strong>PDF watermarking</strong> locally on your device. Your data never leaves your computer, making it the most secure choice for professionals and students alike.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-[2rem] border border-orange-100 shadow-sm">
                  <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-[10px] text-orange-500">Fast Browser Conversion</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Our <strong>JPG to PDF</strong> and <strong>Word to PDF</strong> converters are optimized for speed. No upload queues means instant results every single time.</p>
               </div>
               <div className="bg-white p-6 rounded-[2rem] border border-orange-100 shadow-sm">
                  <h4 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-[10px] text-orange-500">Secure PDF Encryption</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Use our <strong>Protect PDF</strong> tool to add military-grade AES-256 encryption to your files without sharing your passwords with any server.</p>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-3xl shadow-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Secure and Fast PDF Tools" 
              className="relative rounded-[3rem] shadow-2xl border-[12px] border-white w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Deep SEO Article Section */}
      <section className="bg-white py-24 px-6 border-t border-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase tracking-tighter italic">Why PDFswift is the Ultimate Solution for All PDF Problems</h2>
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Complete PDF Management Without Compromise</h3>
              <p>
                In today's digital landscape, document security is paramount. When you look for a tool to <strong>combine PDF files</strong> or <strong>extract pages from PDF</strong>, you deserve transparency. PDFswift offers 20+ specialized utilities that cater to every need. From simple <strong>PDF rotation</strong> to complex <strong>PDF to Excel</strong> data extraction, our engine preserves document fidelity while ensuring maximum speed. 
              </p>
              <p className="mt-4">
                Our suite includes everything from <strong>PDF to Word converter free</strong> to <strong>JPG to PDF high quality</strong> transformation tools. Unlike other platforms that limit you to 2 files per day, PDFswift is the <strong>best free PDF tool for students</strong> and professionals who need to manage an unlimited number of documents daily. We don't believe in limits—we believe in empowering your workflow with the most efficient browser-based technology available today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-orange-50/30 p-8 rounded-[2rem] border border-orange-100">
               <div>
                  <h4 className="font-black text-orange-600 mb-3 uppercase tracking-widest text-xs">For Students & Researchers</h4>
                  <p className="text-sm">Manage your assignments, merge voluminous research papers, and optimize file sizes for university portal uploads without spending a penny. It's the perfect <strong>free PDF tool for students</strong> who need to keep their work organized and secure without subscription fees.</p>
               </div>
               <div>
                  <h4 className="font-black text-orange-600 mb-3 uppercase tracking-widest text-xs">For Business Professionals</h4>
                  <p className="text-sm">Handle sensitive business documents, sign high-stakes contracts with our <strong>Sign PDF</strong> feature, and organize complex project reports with complete confidence knowing your proprietary data never leaves your hardware.</p>
               </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">High-Precision Conversion Engines with No Registration</h3>
              <p>
                Our <strong>PDF to Word converter</strong> uses sophisticated logic to ensure that your text remains editable and your complex formatting stays exactly as intended. Similarly, our <strong>Image to PDF</strong> converter supports massive batch processing, allowing you to turn an entire stack of high-resolution scans into a single, organized, and lightweight PDF document in seconds. 
              </p>
              <p className="mt-4">
                We've built this platform to be a <strong>no signup PDF editor</strong>. No more dealing with slow, ad-heavy websites or being forced to provide your email address just to get a simple task done. PDFswift is clean, fast, <strong>no registration required</strong>, and remarkably easy to use. It is truly the ultimate <strong>free online PDF toolbox</strong> designed for the modern web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Cloud - Hidden but available for crawlers */}
      <section className="bg-slate-50 py-12 px-6 overflow-hidden select-none opacity-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-6 gap-y-4 justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>Merge PDF Free</span>
          <span>Compress PDF Online</span>
          <span>PDF to Word Converter</span>
          <span>JPG to PDF High Speed</span>
          <span>Split PDF Pages</span>
          <span>Protect PDF with Password</span>
          <span>Extract PDF Pages</span>
          <span>PDF Watermarker</span>
          <span>Sign PDF Online Free</span>
          <span>PDF to Excel Table Extraction</span>
          <span>Rotate PDF Pages</span>
          <span>Unlock PDF Restrictions</span>
          <span>PDF to JPG Converter</span>
          <span>Combine PDF Files Mac</span>
          <span>Free Tools for Students</span>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight mb-4">Master Your PDFs</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Expert tips and guides to help you navigate document management like a pro.
              </p>
            </div>
            <Link to="/blog" className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2 self-start">
               Visit the Blog <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Merging Without Quality Loss", date: "May 2026", category: "Basics" },
              { title: "Securing Sensitive Records", date: "April 2026", category: "Security" },
              { title: "Efficient Batch Conversions", date: "March 2026", category: "Workflow" }
            ].map((article, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-pointer">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-4">{article.category} — {article.date}</p>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors">{article.title}</h3>
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                  Read Guide <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
