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
    name: 'Merge PDF Online',
    desc: 'Combine multiple PDF files into one easily for school or work.',
    icon: FilePlus,
    path: '/merge-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF Pages',
    desc: 'Extract pages from your PDF or convert each page to a separate PDF free.',
    icon: FileMinus,
    path: '/split-pdf',
    accent: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF Size',
    desc: 'Reduce file size while optimizing for maximal PDF quality online.',
    icon: Shrink,
    path: '/compress-pdf',
    accent: 'bg-amber-100 text-amber-600',
    premium: true
  },
  {
    id: 'remove-pages',
    name: 'Remove PDF Pages',
    desc: 'Delete specific pages from your PDF document online for free.',
    icon: Trash2,
    path: '/remove-pages',
    accent: 'bg-red-100 text-red-600'
  },
  {
    id: 'extract-pages',
    name: 'Extract PDF Pages',
    desc: 'Get a new PDF with only the specific pages you need free.',
    icon: Scissors,
    path: '/extract-pages',
    accent: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'organize-pdf',
    name: 'Organize PDF Online',
    desc: 'Sort, add and delete PDF pages of your document in your browser.',
    icon: Layers,
    path: '/organize-pdf',
    accent: 'bg-slate-100 text-slate-600'
  },
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF Online',
    desc: 'Rotate your scan or PDF the way you need them instantly.',
    icon: RotateCw,
    path: '/rotate-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word Online',
    desc: 'Convert your PDF to editable DOCX with high accuracy free.',
    icon: FileText,
    path: '/pdf-to-word',
    accent: 'bg-blue-100 text-blue-600',
    premium: true
  },
  {
    id: 'pdf-to-powerpoint',
    name: 'PDF to PPT Converter',
    desc: 'Convert PDF files to editable PowerPoint presentations online.',
    icon: Layout,
    path: '/pdf-to-powerpoint',
    accent: 'bg-orange-100 text-orange-600',
    premium: true
  },
  {
    id: 'pdf-to-excel',
    name: 'PDF to Excel Online',
    desc: 'Extract tables and data from PDF straight into Excel spreadsheets.',
    icon: FileType,
    path: '/pdf-to-excel',
    accent: 'bg-emerald-100 text-emerald-600',
    premium: true
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF Online',
    desc: 'Convert DOC and DOCX files to PDF easily for free.',
    icon: FileType,
    path: '/word-to-pdf',
    accent: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'powerpoint-to-pdf',
    name: 'PPT to PDF Converter',
    desc: 'Convert PPT and PPTX slideshows to PDF online free.',
    icon: FileCode,
    path: '/powerpoint-to-pdf',
    accent: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF Online',
    desc: 'Convert Excel spreadsheets to PDF for easy reading and sharing.',
    icon: FileJson,
    path: '/excel-to-pdf',
    accent: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF Converter',
    desc: 'Convert web pages or HTML files to high-quality PDF documents.',
    icon: Globe,
    path: '/html-to-pdf',
    accent: 'bg-purple-100 text-purple-600',
    premium: true
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG Online',
    desc: 'Extract images from your PDF or save each page as a JPG free.',
    icon: ImageIcon,
    path: '/pdf-to-jpg',
    accent: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF Converter',
    desc: 'Convert JPG, PNG, BMP and more to PDF instantly online.',
    icon: ImageIcon,
    path: '/image-to-pdf',
    accent: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'protect-pdf',
    name: 'Protect PDF Securely',
    desc: 'Encrypt your PDF with a password for maximum security.',
    icon: Lock,
    path: '/protect-pdf',
    accent: 'bg-slate-900 text-white'
  },
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF Online',
    desc: 'Remove PDF password security from your document instantly.',
    icon: Unlock,
    path: '/unlock-pdf',
    accent: 'bg-red-100 text-red-600',
    premium: true
  },
  {
    id: 'sign-pdf',
    name: 'Sign PDF Files',
    desc: 'Sign your PDF or request digital signatures from others.',
    icon: PenTool,
    path: '/sign-pdf',
    accent: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'watermark-pdf',
    name: 'Watermark PDF Online',
    desc: 'Stamp an image or text over your PDF in seconds free.',
    icon: Stamp,
    path: '/watermark-pdf',
    accent: 'bg-blue-100 text-blue-600',
    premium: true
  }
];
