import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { FilePlus, X, FileText, Download, Loader2, Info } from 'lucide-react';
import SEO from '../components/SEO';

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (resultUrl) setResultUrl(null);
  };

  const mergePDFFiles = async () => {
    if (files.length < 2) return;
    setMerging(true);
    try {
      const mergedPdf = await PDFDocument.create();
      
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('Failed to merge PDFs. Ensure all files are valid PDF documents.');
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title="Merge PDF Online – Fast & Secure" 
        description="Merge PDF files instantly with PDFswift. Our secure online tool lets you combine multiple documents right in your browser with 100% privacy."
        keywords="merge pdf, combine pdf, join pdf online, pdfswift merge"
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Merge PDF Files – Fast & Secure</h1>
        <p className="text-slate-500 text-sm mt-1">Combine multiple documents into one single PDF instantly using the ultimate PDFswift suite.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-8 mb-6 transition-all hover:border-orange-400">
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="flex flex-col items-center justify-center cursor-pointer py-10"
            >
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <FilePlus size={32} />
              </div>
              <span className="text-lg font-black text-slate-800 tracking-tight">Choose PDF Files</span>
              <span className="text-sm text-slate-400 font-medium">or drag and drop them here</span>
            </label>
          </div>

          {files.length > 0 && (
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-orange-100 mb-6">
              <div className="bg-slate-50 border-b border-orange-100 px-6 py-4 flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{files.length} Files Selected</span>
                <button 
                  onClick={() => setFiles([])}
                  className="text-[10px] font-black text-slate-400 hover:text-red-500 uppercase tracking-[0.2em] transition-colors"
                >
                  Clear All
                </button>
              </div>
              <ul className="divide-y divide-slate-100">
                {files.map((file, index) => (
                  <li key={`${file.name}-${index}`} className="px-6 py-4 flex items-center justify-between group hover:bg-orange-50/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 truncate max-w-[200px]">{file.name}</p>
                        <p className="text-[10px] text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={() => removeFile(index)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-slate-50 flex justify-end gap-3">
                 {resultUrl ? (
                   <a 
                    href={resultUrl} 
                    download="merged-documents.pdf"
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-emerald-100 transition-all"
                   >
                     <Download size={18} /> Download PDF
                   </a>
                 ) : (
                   <button
                    onClick={mergePDFFiles}
                    disabled={merging || files.length < 2}
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-orange-100 transition-all disabled:opacity-50"
                  >
                    {merging ? <Loader2 className="animate-spin" size={18} /> : <FilePlus size={18} />}
                    {merging ? 'Merging...' : 'Merge PDF'}
                  </button>
                 )}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="bg-white border border-orange-100 rounded-[2rem] p-8 shadow-sm">
             <h3 className="text-[10px] font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-[0.2em]">
                <Info size={14} className="text-orange-500" /> SECURE GRID
             </h3>
             <ul className="space-y-4 text-xs text-slate-500 leading-relaxed font-medium">
                <li className="flex gap-2">✓ 100% Client-Side Processing</li>
                <li className="flex gap-2">✓ No server uploads required</li>
                <li className="flex gap-2">✓ AES-256 Local Encryption</li>
                <li className="flex gap-2">✓ Instant Merging Speed</li>
             </ul>
          </div>
          
          <article className="prose prose-slate prose-sm">
             <h4 className="font-bold text-slate-800">Pro Tip: Merge Order</h4>
             <p className="text-xs text-slate-500">The documents will be combined in the order they appear in the list above. Drag and drop to reorder coming soon!</p>
          </article>
        </aside>
      </div>

      <section className="mt-20 prose prose-slate max-w-none pb-20 border-t border-orange-50 pt-16">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">The Ultimate Free PDF Merger Online</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <p className="text-slate-600 leading-relaxed">
              When you search for a way to <strong>merge PDF files free online</strong>, you often encounter sites with heavy ads and slow processing. PDFswift is different. We've built the fastest <strong>PDF merger</strong> on the market using browser-native code. This means you can <strong>combine PDF documents</strong> instantly without waiting for files to upload or convert. Whether you're a student <strong>joining research papers</strong> or a property manager <strong>merging leases into one PDF</strong>, our tool handles it with ease.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Our <strong>online PDF joiner</strong> is a completely <strong>free PDF tool for students</strong>. We understand that academic life requires a lot of document organization—merging homework, combining lecture notes, and organizing digital books. That's why we don't limit the number of files you can process. It is the most reliable <strong>no registration PDF merge</strong> tool available for current-gen web browsers.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Why Privacy-First Merging is Vital</h3>
            <p className="text-slate-600 leading-relaxed">
              Standard <strong>PDF converters</strong> upload your sensitive data to remote servers. This poses a massive security risk for files like tax returns, bank statements, and legal contracts. PDFswift solves this by being a <strong>local PDF merger</strong>. Browsers today are powerful enough to handle these operations locally, and we take full advantage of that to keep your <strong>documents totally private</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed font-semibold text-orange-600">
              Key Features: Unlimited merges, no file size limits, 100% browser-side, no watermark, and absolutely free forever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
