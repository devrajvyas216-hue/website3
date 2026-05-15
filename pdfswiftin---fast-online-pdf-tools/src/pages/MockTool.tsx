import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, Info, Shield } from 'lucide-react';
import { ALL_TOOLS, PDFTool } from '../constants';
import PremiumGate from '../components/PremiumGate';

interface MockToolProps {
  toolId: string;
}

export default function MockTool({ toolId }: MockToolProps) {
  const tool = ALL_TOOLS.find(t => t.id === toolId);

  if (!tool) return <div>Tool not found</div>;

  const content = (
    <div className="max-w-4xl mx-auto py-12">
      <Link to="/all-tools" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest mb-8 transition-colors">
        <ArrowLeft size={14} /> Back to Library
      </Link>

      <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className={`w-24 h-24 rounded-3xl ${tool.accent} flex items-center justify-center shrink-0 shadow-lg`}>
            <tool.icon size={48} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">{tool.name}</h1>
              {tool.premium && (
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase rounded-lg border border-amber-200">Pro Feature</span>
              )}
            </div>
            <p className="text-slate-500 text-lg">{tool.desc}</p>
          </div>
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-10 border border-slate-100 flex flex-col items-center text-center">
           <Construction size={48} className="text-indigo-600 mb-6 animate-bounce" />
           <h3 className="text-xl font-bold text-slate-800 mb-3">Refining the Protocol</h3>
           <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
             We are currently optimizing the WebAssembly core for <strong>{tool.name}</strong> to ensure 100% private, browser-side processing at pro-grade speeds. 
             This tool will be available in the next release.
           </p>
           <Link to="/all-tools" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-md">
             Explore Other Tools
           </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                 <Info size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1 text-sm">Why is this tool pro?</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Advanced mathematical transformations requiring heavy CPU cycles are reserved for Swift Pro users to maintain our high availability.</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                 <Shield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1 text-sm">Privacy Commitment</h4>
                <p className="text-xs text-slate-500 leading-relaxed">When released, this tool will process 100% of your data locally, just like our core utilities.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  return tool.premium ? <PremiumGate>{content}</PremiumGate> : content;
}
