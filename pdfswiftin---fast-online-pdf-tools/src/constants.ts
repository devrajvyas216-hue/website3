import { 
  FilePlus, FileMinus, Lock, Image as ImageIcon, 
  FileText, Shrink, Trash2, Scissors, Layers, 
  RotateCw, FileType, FileJson, FileCode, Search, 
  Globe, Layout, Unlock, PenTool, Stamp
} from 'lucide-react';

export interface PDFTool {
  id: string;
  name: string;
  desc: string;
  icon: any;
  path: string;
  accent: string;
  premium?: boolean;
}

export const ALL_TOOLS: PDFTool[] = [
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    desc: 'Combine multiple PDF files into one easily.',
    icon: FilePlus,
    path: '/merge-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    desc: 'Extract pages from your PDF or convert each page to a separate PDF.',
    icon: FileMinus,
    path: '/split-pdf',
    accent: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    desc: 'Reduce file size while optimizing for maximal PDF quality.',
    icon: Shrink,
    path: '/compress-pdf',
    accent: 'bg-amber-100 text-amber-600',
    premium: true
  },
  {
    id: 'remove-pages',
    name: 'Remove Pages',
    desc: 'Delete specific pages from your PDF document.',
    icon: Trash2,
    path: '/remove-pages',
    accent: 'bg-red-100 text-red-600'
  },
  {
    id: 'extract-pages',
    name: 'Extract Pages',
    desc: 'Get a new PDF with only the pages you need.',
    icon: Scissors,
    path: '/extract-pages',
    accent: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'organize-pdf',
    name: 'Organize PDF',
    desc: 'Sort, add and delete PDF pages of your document.',
    icon: Layers,
    path: '/organize-pdf',
    accent: 'bg-slate-100 text-slate-600'
  },
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    desc: 'Rotate your PDFs the way you need them.',
    icon: RotateCw,
    path: '/rotate-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    desc: 'Convert your PDF to DOCX with high accuracy.',
    icon: FileText,
    path: '/pdf-to-word',
    accent: 'bg-blue-100 text-blue-600',
    premium: true
  },
  {
    id: 'pdf-to-powerpoint',
    name: 'PDF to PPT',
    desc: 'Convert PDF files to editable PowerPoint presentations.',
    icon: Layout,
    path: '/pdf-to-powerpoint',
    accent: 'bg-orange-100 text-orange-600',
    premium: true
  },
  {
    id: 'pdf-to-excel',
    name: 'PDF to Excel',
    desc: 'Extract data from PDF straight into Excel spreadsheets.',
    icon: FileType,
    path: '/pdf-to-excel',
    accent: 'bg-emerald-100 text-emerald-600',
    premium: true
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    desc: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    icon: FileType,
    path: '/word-to-pdf',
    accent: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'powerpoint-to-pdf',
    name: 'PPT to PDF',
    desc: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.',
    icon: FileCode,
    path: '/powerpoint-to-pdf',
    accent: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    desc: 'Make Excel spreadsheets easy to read by converting them to PDF.',
    icon: FileJson,
    path: '/excel-to-pdf',
    accent: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    desc: 'Convert web pages or HTML files to PDF documents.',
    icon: Globe,
    path: '/html-to-pdf',
    accent: 'bg-purple-100 text-purple-600',
    premium: true
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    desc: 'Extract images from your PDF or save each page as a JPG.',
    icon: ImageIcon,
    path: '/pdf-to-jpg',
    accent: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    desc: 'Convert JPG, PNG, BMP and more to PDF.',
    icon: ImageIcon,
    path: '/image-to-pdf',
    accent: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'protect-pdf',
    name: 'Protect PDF',
    desc: 'Encrypt your PDF with a password for security.',
    icon: Lock,
    path: '/protect-pdf',
    accent: 'bg-slate-900 text-white'
  },
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF',
    desc: 'Remove PDF password security from your document.',
    icon: Unlock,
    path: '/unlock-pdf',
    accent: 'bg-red-100 text-red-600',
    premium: true
  },
  {
    id: 'sign-pdf',
    name: 'Sign PDF',
    desc: 'Sign your PDF or request signatures from others.',
    icon: PenTool,
    path: '/sign-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'watermark-pdf',
    name: 'Watermark',
    desc: 'Stamp an image or text over your PDF in seconds.',
    icon: Stamp,
    path: '/watermark-pdf',
    accent: 'bg-blue-100 text-blue-600',
    premium: true
  }
];
