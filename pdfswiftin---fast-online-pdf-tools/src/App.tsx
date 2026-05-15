/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import MergePDF from './pages/MergePDF';
import SplitPDF from './pages/SplitPDF';
import ProtectPDF from './pages/ProtectPDF';
import ImageToPDF from './pages/ImageToPDF';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import AllTools from './pages/AllTools';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MockTool from './pages/MockTool';
import { ALL_TOOLS } from './constants';

export default function App() {
  const implementedTools = ['merge-pdf', 'split-pdf', 'protect-pdf', 'image-to-pdf'];
  const mockTools = ALL_TOOLS.filter(t => !implementedTools.includes(t.id));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="merge-pdf" element={<MergePDF />} />
            <Route path="split-pdf" element={<SplitPDF />} />
            <Route path="protect-pdf" element={<ProtectPDF />} />
            <Route path="image-to-pdf" element={<ImageToPDF />} />

            {/* Dynamic Mock Tools - Manually listed to avoid lint issues with mapping in this environment */}
            <Route path="compress-pdf" element={<MockTool toolId="compress-pdf" />} />
            <Route path="remove-pages" element={<MockTool toolId="remove-pages" />} />
            <Route path="extract-pages" element={<MockTool toolId="extract-pages" />} />
            <Route path="organize-pdf" element={<MockTool toolId="organize-pdf" />} />
            <Route path="rotate-pdf" element={<MockTool toolId="rotate-pdf" />} />
            <Route path="pdf-to-word" element={<MockTool toolId="pdf-to-word" />} />
            <Route path="pdf-to-powerpoint" element={<MockTool toolId="pdf-to-powerpoint" />} />
            <Route path="pdf-to-excel" element={<MockTool toolId="pdf-to-excel" />} />
            <Route path="word-to-pdf" element={<MockTool toolId="word-to-pdf" />} />
            <Route path="powerpoint-to-pdf" element={<MockTool toolId="powerpoint-to-pdf" />} />
            <Route path="excel-to-pdf" element={<MockTool toolId="excel-to-pdf" />} />
            <Route path="html-to-pdf" element={<MockTool toolId="html-to-pdf" />} />
            <Route path="pdf-to-jpg" element={<MockTool toolId="pdf-to-jpg" />} />
            <Route path="unlock-pdf" element={<MockTool toolId="unlock-pdf" />} />
            <Route path="sign-pdf" element={<MockTool toolId="sign-pdf" />} />
            <Route path="watermark-pdf" element={<MockTool toolId="watermark-pdf" />} />

            <Route path="all-tools" element={<AllTools />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
