import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ChevronRight, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export const blogPosts = [
  {
    slug: 'how-to-merge-pdf-files',
    title: 'How to Merge PDF Files Free Online Without Quality Loss',
    excerpt: 'Learn the quickest way to combine multiple PDF documents into one professional file using PDFSwift\'s local browser-side engine.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&auto=format&fit=crop'
  },
  {
    slug: 'reduce-pdf-file-size-mac-free',
    title: 'How to **Reduce PDF File Size on Mac Without Adobe** Acrobat',
    excerpt: 'Need to shrink a document for email? Discover the easiest local tool to compress your PDFs on macOS without subscription fees.',
    date: 'May 15, 2026',
    readTime: '6 min read',
    category: 'Optimization',
    image: 'https://images.unsplash.com/photo-1586282391129-ad6a107ad03b?w=800&auto=format&fit=crop'
  },
  {
    slug: 'combine-pdf-files-private-offline',
    title: '**How to Combine PDF Files Offline Totally Private** and Secure',
    excerpt: 'Security matters. Learn how to merge sensitive business documents without uploading them to any external cloud servers.',
    date: 'May 14, 2026',
    readTime: '5 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
  },
  {
    slug: 'remove-pdf-password-permanently',
    title: '**Remove Password from PDF Permanently Without Software** Installation',
    excerpt: 'Unlock your documents for easy reading. A step-by-step guide to removing PDF restrictions using your web browser.',
    date: 'May 14, 2026',
    readTime: '4 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop'
  },
  {
    slug: 'convert-multiple-jpeg-to-pdf-instantly',
    title: 'The Fastest Way to **Convert Multiple JPEG to PDF Instantly**',
    excerpt: 'Batch processing made simple. Turn your stack of photos into a single, organized PDF document in just a few seconds.',
    date: 'May 13, 2026',
    readTime: '3 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format&fit=crop'
  },
  {
    slug: 'edit-pdf-text-free-no-signup',
    title: '**Edit PDF Text Free Without Sign Up** or Hidden Costs',
    excerpt: 'Make quick corrections to your PDF documents instantly. No registration, no credit cards, just fast editing in your browser.',
    date: 'May 13, 2026',
    readTime: '5 min read',
    category: 'Editing',
    image: 'https://images.unsplash.com/photo-1454165833767-027508496b4c?w=800&auto=format&fit=crop'
  },
  {
    slug: 'protect-sensitive-pdf-documents',
    title: 'Encryption 101: How to Secure Your PDF with a Password',
    excerpt: 'Stop unauthorized access to your sensitive contracts and documents. We show you how to use AES-256 bit protection effectively.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1512428559083-a4979b2b51ff?w=800&auto=format&fit=crop'
  },
  {
    slug: 'optimize-images-for-pdf',
    title: 'Best Practices for Converting JPG and PNG to PDF',
    excerpt: 'Ever wondered why some PDFs look blurry? Discover the ideal DPI and layout settings for a perfect image-to-PDF conversion.',
    date: 'May 08, 2026',
    readTime: '3 min read',
    category: 'Optimization',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e905263543?w=800&auto=format&fit=crop'
  }
];

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-indigo-600 underline decoration-indigo-200 underline-offset-4">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto pb-20 px-4">
      <SEO 
        title="PDF Guides & Tutorials Free Online - PDFSwift Blog" 
        description="Discover expert tips and tutorials on how to manage, convert, and secure your PDF documents with PDFSwift Free Online Tools."
        keywords="pdf tutorials, how to merge pdf, secure pdf guide, image to pdf conversion tips, free pdf tools"
      />

      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          <BookOpen size={12} /> The Swift Blog
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">Free PDF Mastery Tutorials.</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Pro-grade PDF guides and industry insights to help students and professionals work Smarter.
        </p>

        <div className="mt-10 max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search guides..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-indigo-100 shadow-sm transition-all text-sm"
          />
          <Search className="absolute left-4 top-4 text-slate-300" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
               <img 
                 src={post.image} 
                 alt={post.title.replace(/\*\*/g, '')} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-black text-slate-900 uppercase">
                 {post.category}
               </div>
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                 <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                 <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                <Link to={`/blog/${post.slug}`}>{renderHighlightedText(post.title)}</Link>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                {renderHighlightedText(post.excerpt)}
              </p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="mt-auto text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 group/btn"
              >
                Read Article <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-indigo-500" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
