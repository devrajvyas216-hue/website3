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
  image?: string;
  path: string;
  accent: string;
  premium?: boolean;
}

import catMerge from './assets/images/cat_merge_pdf_1778995699136.png';
import catSplit from './assets/images/cat_split_pdf_1778995719129.png';
import catCompress from './assets/images/cat_compress_pdf_1778995737045.png';
import catProtect from './assets/images/cat_protect_pdf_1778995752950.png';
import catImage from './assets/images/cat_image_to_pdf_1778995774401.png';
import catGeneric from './assets/images/cat_generic_pdf_tool_1778995788972.png';
import catWord from './assets/images/cat_pdf_to_word_1778995858463.png';
import catSign from './assets/images/cat_sign_pdf_1778995876594.png';

export const ALL_TOOLS: PDFTool[] = [
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    desc: 'Combine multiple PDF files into one single document instantly.',
    icon: FilePlus,
    image: catMerge,
    path: '/merge-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    desc: 'Extract pages from your PDF or save each page as a separate file.',
    icon: FileMinus,
    image: catSplit,
    path: '/split-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    desc: 'Reduce file size without compromising document quality.',
    icon: Shrink,
    image: catCompress,
    path: '/compress-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'remove-pages',
    name: 'Remove Pages',
    desc: 'Easily delete unwanted pages from your PDF document.',
    icon: Trash2,
    image: catGeneric,
    path: '/remove-pages',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'extract-pages',
    name: 'Extract Pages',
    desc: 'Select and export specific pages into a new PDF file.',
    icon: Scissors,
    image: catGeneric,
    path: '/extract-pages',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'organize-pdf',
    name: 'Organize PDF',
    desc: 'Sort, reorder, or delete pages with a simple drag-and-drop.',
    icon: Layers,
    image: catGeneric,
    path: '/organize-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    desc: 'Fix orientation by rotating PDF pages as needed.',
    icon: RotateCw,
    image: catGeneric,
    path: '/rotate-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    desc: 'Convert PDF files to editable Word documents with precision.',
    icon: FileText,
    image: catWord,
    path: '/pdf-to-word',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'pdf-to-powerpoint',
    name: 'PDF to PPT',
    desc: 'Transform your PDF into editable PowerPoint presentations.',
    icon: Layout,
    image: catGeneric,
    path: '/pdf-to-powerpoint',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'pdf-to-excel',
    name: 'PDF to Excel',
    desc: 'Extract tables from PDF into organized Excel sheets.',
    icon: FileType,
    image: catGeneric,
    path: '/pdf-to-excel',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    desc: 'Protect your formatting by converting Word docs to PDF.',
    icon: FileType,
    image: catGeneric,
    path: '/word-to-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'powerpoint-to-pdf',
    name: 'PPT to PDF',
    desc: 'Convert presentations into high-quality PDF files.',
    icon: FileCode,
    image: catGeneric,
    path: '/powerpoint-to-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    desc: 'Make spreadsheets easy to share by converting to PDF.',
    icon: FileJson,
    image: catGeneric,
    path: '/excel-to-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    desc: 'Save web pages or HTML files as professional PDFs.',
    icon: Globe,
    image: catGeneric,
    path: '/html-to-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    desc: 'Extract pictures or convert entire PDF pages to JPG.',
    icon: ImageIcon,
    image: catGeneric,
    path: '/pdf-to-jpg',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    desc: 'Combine JPG, PNG or other images into a single PDF.',
    icon: ImageIcon,
    image: catImage,
    path: '/image-to-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'protect-pdf',
    name: 'Protect PDF',
    desc: 'Lock your PDF files with military-grade password encryption.',
    icon: Lock,
    image: catProtect,
    path: '/protect-pdf',
    accent: 'bg-slate-900 text-white'
  },
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF',
    desc: 'Remove password restrictions from secured PDF files.',
    icon: Unlock,
    image: catGeneric,
    path: '/unlock-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'sign-pdf',
    name: 'Sign PDF',
    desc: 'Add your digital signature or request it from others.',
    icon: PenTool,
    image: catSign,
    path: '/sign-pdf',
    accent: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'watermark-pdf',
    name: 'Watermark PDF',
    desc: 'Stamp custom labels or images onto your PDF pages.',
    icon: Stamp,
    image: catGeneric,
    path: '/watermark-pdf',
    accent: 'bg-orange-50 text-orange-600'
  }
];
