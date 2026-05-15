import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from './Blog';

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-indigo-600 border-b-2 border-indigo-100">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-indigo-600 hover:underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-20 px-4">
      <SEO 
        title={`${post.title.replace(/\*\*/g, '')} - PDFSwiftin Blog`} 
        description={post.excerpt.replace(/\*\*/g, '')}
      />

      <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest mb-12 transition-colors">
        <ArrowLeft size={14} /> Back to Library
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">
           <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded">{post.category}</span>
           <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
           <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
          {renderHighlightedText(post.title)}
        </h1>
        <div className="flex items-center justify-between border-y border-slate-100 py-6">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              <div>
                <p className="text-xs font-bold text-slate-800">Swift Editorial</p>
                <p className="text-[10px] text-slate-400">PDF Solutions Expert</p>
              </div>
           </div>
           <div className="flex items-center gap-4 text-slate-400">
             <button className="hover:text-indigo-600 transition-colors"><Share2 size={18} /></button>
             <button className="hover:text-amber-600 transition-colors"><Bookmark size={18} /></button>
           </div>
        </div>
      </header>

      <img 
        src={post.image} 
        alt={post.title.replace(/\*\*/g, '')} 
        className="w-full aspect-video object-cover rounded-3xl mb-12 shadow-2xl shadow-indigo-100" 
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <p className="lead text-xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-indigo-500 pl-6 mb-10">
          {renderHighlightedText(post.excerpt)}
        </p>
        
        <h2>The Challenge of Modern PDF Management</h2>
        <p>
          Managing PDF files often feels like a chore, especially when security is involved. Most online tools require you to upload
          your files to a remote server, which can be a significant risk for confidential business data.
        </p>

        <h3>Why PDFSwiftin is Different</h3>
        <p>
          Unlike traditional platforms, PDFSwiftin processes everything right in your browser. This <em>how-to</em> guide specifically
          explores the technical benefits of browser-side encryption and manipulation.
        </p>

        <ul>
          <li><strong>Zero Latency:</strong> No need to wait for uploads or downloads.</li>
          <li><strong>Privacy First:</strong> Your documents stay on your machine.</li>
          <li><strong>High Fidelity:</strong> Our <code>pdf-lib</code> engine ensures 1:1 pixel accuracy.</li>
        </ul>

        <div className="my-12 p-8 bg-slate-900 rounded-3xl text-white">
          <h4 className="text-white mt-0 mb-4">Start Improving Your Workflow</h4>
          <p className="text-sm text-slate-400 mb-6">Ready to see it in action? Try our merge tool today.</p>
          <Link 
            to="/merge-pdf" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl no-underline font-bold transition-all"
          >
            Go to Merge Tool
          </Link>
        </div>

        <h2>Step-by-Step Implementation</h2>
        <p>
          1. Select your target document.<br/>
          2. Wait for the browser memory to load the binary stream.<br/>
          3. Apply your transformations (split, rotate, or merge).<br/>
          4. Download the newly generated document instantly.
        </p>
      </article>

      <footer className="mt-20 pt-10 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">About the Author</h4>
        <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
          The PDFSwiftin Editorial team is composed of document security specialists and software engineers dedicated to making the web a safer place for file management.
        </p>
      </footer>
    </div>
  );
}
