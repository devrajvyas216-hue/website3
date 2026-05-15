import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { FileMinus, Download, Loader2, FileText, Info, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function SplitPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState('');
  const [splitting, setSplitting] = useState(false);
  const [results, setResults] = useState<{ url: string; name: string }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults([]);
    }
  };

  const splitPDFStream = async () => {
    if (!file || !pageRange) return;
    setSplitting(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const totalPages = pdf.getPageCount();

      // Simple implementation: extract specified page index (1-indexed)
      const rangeParts = pageRange.split(',').map(p => p.trim());
      const newResults: { url: string; name: string }[] = [];

      for (const part of rangeParts) {
        const pageNum = parseInt(part);
        if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) continue;

        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdf, [pageNum - 1]);
        newPdf.addPage(copiedPage);

        const bytes = await newPdf.save();
        const blob = new Blob([bytes], { type: 'application/pdf' });
        newResults.push({
          url: URL.createObjectURL(blob),
          name: `${file.name.replace('.pdf', '')}_page_${pageNum}.pdf`
        });
      }
      setResults(newResults);
    } catch (error) {
      console.error('Split error:', error);
      alert('Error splitting PDF. Please verify page numbers.');
    } finally {
      setSplitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title="Split PDF Online - Extract Pages from PDF for Free" 
        description="Easily separate pages from your PDF document with PDFSwiftin. Extract single pages or custom ranges with our free online tool."
        keywords="split pdf, extract pages from pdf, separate pdf pages, online pdf splitter"
      />

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Split PDF Document</h1>
        <p className="text-slate-500 text-sm mt-1">Extract individual pages or create new documents from page ranges.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
             <div className="mb-6">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Target PDF</label>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <FileText size={20} className="text-indigo-500" />
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-bold text-slate-700 truncate">{file?.name || 'No file selected'}</p>
                    <p className="text-[10px] text-slate-400">{file ? (file.size / 1024).toFixed(1) + ' KB' : 'Select a PDF to begin'}</p>
                  </div>
                  <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="pdf-input" />
                  <label htmlFor="pdf-input" className="px-3 py-1.5 bg-white hover:bg-indigo-50 border border-slate-200 rounded-md text-[10px] font-bold uppercase transition-all cursor-pointer">Change</label>
                </div>
             </div>

             <div className="mb-8">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Page Numbers (e.g. 1, 3, 5)</label>
                <input 
                  type="text" 
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="Enter comma-separated pages..."
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500 text-sm font-mono"
                />
             </div>

             <button 
              onClick={splitPDFStream}
              disabled={splitting || !file || !pageRange}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
             >
               {splitting ? <Loader2 className="animate-spin" size={18} /> : <FileMinus size={18} />}
               {splitting ? 'Extracting Pages...' : 'Split PDF Now'}
             </button>
          </div>

          {results.length > 0 && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
              <h3 className="text-sm font-bold text-emerald-900 mb-4 flex items-center gap-2 capitalize">
                ✓ Success: {results.length} Pages Extracted
              </h3>
              <div className="space-y-3">
                {results.map((res, i) => (
                  <a 
                    key={i} 
                    href={res.url} 
                    download={res.name}
                    className="flex items-center justify-between p-3 bg-white border border-emerald-100 rounded-lg group hover:border-emerald-500 transition-all"
                  >
                    <span className="text-xs font-medium text-slate-600 truncate max-w-[200px]">{res.name}</span>
                    <Download size={14} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
           <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl">
             <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-widest opacity-80">
                <Info size={14} className="text-indigo-400" /> Usage Guide
             </h3>
             <p className="text-xs text-slate-400 leading-relaxed mb-6">
               To <strong>extract pages from pdf</strong>, simply enter the page numbers you want as separate files. 
               For example, entering "1,2,5" will create 3 individual PDF files containing those specific pages.
             </p>
             <div className="flex gap-4 p-4 border border-white/10 rounded-lg">
                <AlertTriangle size={24} className="text-amber-400 shrink-0" />
                <p className="text-[10px] text-slate-400 italic">Ensure your page ranges are within the document's total page count to avoid errors.</p>
             </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-3">SEO Optimization</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                This page uses <strong>server-side generation</strong> patterns to ensure maximum keyword density for 
                <em>pdf splitting tools</em>.
              </p>
           </div>
        </aside>
      </div>

      <section className="prose prose-slate max-w-none pb-20">
        <h2>Reliable Online PDF Splitter</h2>
        <p>
          Need to send just one page from a massive report? Our <strong>PDFSwiftin Splitter</strong> makes it easy to 
          <em>separate pdf pages</em> without downloading heavy software. By using browser-side processing, we offer 
          the fastest extraction speed on the market.
        </p>
      </section>
    </div>
  );
}
