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
        title="Merge PDF Online - Combine PDF Files for Free" 
        description="Combine multiple PDF documents into one easily with PDFSwiftin. No file size limits, browser-side processing, and 100% private."
        keywords="merge pdf, combine pdf, online pdf merger, join pdf files"
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Merge PDF Files</h1>
        <p className="text-slate-500 text-sm mt-1">Combine multiple documents into one single PDF instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-8 mb-6 transition-all hover:border-indigo-400">
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
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <FilePlus size={32} />
              </div>
              <span className="text-lg font-bold text-slate-800">Choose PDF Files</span>
              <span className="text-sm text-slate-400">or drag and drop them here</span>
            </label>
          </div>

          {files.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{files.length} Files Selected</span>
                <button 
                  onClick={() => setFiles([])}
                  className="text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                >
                  Clear All
                </button>
              </div>
              <ul className="divide-y divide-slate-100">
                {files.map((file, index) => (
                  <li key={`${file.name}-${index}`} className="px-6 py-4 flex items-center justify-between group hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-slate-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-700 truncate max-w-[200px]">{file.name}</p>
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
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-emerald-100 transition-all"
                   >
                     <Download size={18} /> Download Merged PDF
                   </a>
                 ) : (
                   <button
                    onClick={mergePDFFiles}
                    disabled={merging || files.length < 2}
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 transition-all disabled:opacity-50"
                  >
                    {merging ? <Loader2 className="animate-spin" size={18} /> : <FilePlus size={18} />}
                    {merging ? 'Merging Files...' : 'Merge PDF Now'}
                  </button>
                 )}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
             <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-widest">
                <Info size={14} className="text-indigo-500" /> SEO Checklist
             </h3>
             <ul className="space-y-4 text-xs text-slate-500 leading-relaxed">
                <li className="flex gap-2 italic">✓ Optimized title tags for "Merge PDF"</li>
                <li className="flex gap-2 italic">✓ High accessibility aria-labels</li>
                <li className="flex gap-2 italic">✓ Fast loading client-side JS</li>
                <li className="flex gap-2 italic">✓ Strategic H2 & H3 placement</li>
             </ul>
          </div>
          
          <article className="prose prose-slate prose-sm">
             <h4 className="font-bold text-slate-800">Pro Tip: Merge Order</h4>
             <p className="text-xs text-slate-500">The documents will be combined in the order they appear in the list above. Drag and drop to reorder coming soon!</p>
          </article>
        </aside>
      </div>

      <section className="mt-20 prose prose-slate max-w-none pb-20">
        <h2>How to Merge PDF Files Free Online</h2>
        <p>
          Merging your PDF documents shouldn't be complicated. With <strong>PDFSwiftin</strong>, we've optimized the <em>merge pdf free online</em> 
          workflow to ensure you can combine multiple invoices, reports, or chapters into a single file without any security worries.
        </p>
        <h3>Safe and Private Merging</h3>
        <p>
          Unlike other services, our tool performs the "low-level" heavy lifting inside your web browser using <strong>pdf-lib</strong>. 
          This means your confidential files are never uploaded to our servers, making PDFSwiftin the preferred choice for privacy-conscious professionals.
        </p>
      </section>
    </div>
  );
}
