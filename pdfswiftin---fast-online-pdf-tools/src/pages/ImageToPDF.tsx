import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { ImageIcon, Download, Loader2, Info, Eye } from 'lucide-react';
import SEO from '../components/SEO';

export default function ImageToPDF() {
  const [images, setImages] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages((prev) => [...prev, ...Array.from(e.target.files!)]);
      setResultUrl(null);
    }
  };

  const convertToPDF = async () => {
    if (images.length === 0) return;
    setConverting(true);
    try {
      const pdfDoc = await PDFDocument.create();
      
      for (const file of images) {
        const imageBytes = await file.arrayBuffer();
        let image;
        if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
          image = await pdfDoc.embedJpg(imageBytes);
        } else if (file.type === 'image/png') {
          image = await pdfDoc.embedPng(imageBytes);
        } else {
          continue;
        }

        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setResultUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Conversion error:', error);
      alert('Error converting images. Ensure they are JPG or PNG.');
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title="Image to PDF - Convert JPG, PNG to PDF Online" 
        description="Convert your pictures and photos into PDF documents in seconds. Fast, free, and secure online image to PDF converter."
        keywords="jpg to pdf, png to pdf, image to pdf online, convert photo to pdf"
      />

      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Image to PDF</h1>
        <p className="text-slate-500 text-sm mt-1">Convert your images into high-quality PDF documents instantly.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-12">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <input type="file" multiple accept="image/jpeg,image/png" onChange={handleFileChange} className="hidden" id="img-input" />
          <label 
            htmlFor="img-input"
            className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-indigo-400 hover:bg-white transition-all bg-white"
          >
            <ImageIcon size={40} className="text-slate-400 mb-4" />
            <span className="text-sm font-bold text-slate-700">Add JPG or PNG Images</span>
            <span className="text-xs text-slate-400">Up to 50MB per file</span>
          </label>
        </div>

        {images.length > 0 && (
          <div className="p-8 animate-in fade-in slide-in-from-top-4">
             <div className="flex flex-wrap gap-4 mb-8">
               {images.map((img, i) => (
                 <div key={i} className="relative w-24 h-24 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group">
                    <img src={URL.createObjectURL(img)} className="w-full h-full object-cover" alt="" />
                    <button 
                      onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                      className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-xs"
                    >
                      Remove
                    </button>
                 </div>
               ))}
             </div>

             <div className="flex justify-center border-t border-slate-100 pt-8">
               {resultUrl ? (
                 <a 
                   href={resultUrl} 
                   download="SwiftImage_converted.pdf"
                   className="px-12 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold flex items-center gap-3 shadow-xl shadow-emerald-100 transition-all"
                 >
                   <Download size={20} /> Download PDF
                 </a>
               ) : (
                 <button 
                   onClick={convertToPDF}
                   disabled={converting || images.length === 0}
                   className="px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold flex items-center gap-3 shadow-xl shadow-indigo-100 transition-all disabled:opacity-50"
                 >
                   {converting ? <Loader2 className="animate-spin" size={20} /> : <Eye size={20} />}
                   {converting ? 'Processing Images...' : 'Convert to PDF'}
                 </button>
               )}
             </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
         <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
              <Info size={14} className="text-indigo-500" /> SEO Benefits
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Converting images to PDF reduces page load times and improves indexing capability for 
              portfolios and visual documents. Essential for <strong>image to pdf online</strong> strategies.
            </p>
         </div>
         <div className="p-8 bg-slate-900 rounded-2xl text-white">
            <h3 className="text-sm font-bold mb-4 opacity-80">Content Tip</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use PDFSwiftin to combine your scanned documents into a single professional PDF for easy sharing.
            </p>
         </div>
      </div>
    </div>
  );
}
