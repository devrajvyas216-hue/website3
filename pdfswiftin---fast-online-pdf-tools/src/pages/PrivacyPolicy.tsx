import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto prose prose-slate">
      <SEO title="Privacy Policy - PDFSwiftin" description="Privacy policy for PDFSwiftin. We respect your data and do not store any files on our servers." />
      
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-slate-500">Effective Date: May 14, 2026</p>

      <section>
        <h2>1. Data Integrity and Privacy</h2>
        <p>
          At <strong>PDFSwiftin</strong>, your privacy is our core value. Unlike other online PDF tools, our platform 
          utilizes client-side processing. This means that when you merge, split, or protect a PDF, the actual file 
          <strong>never leaves your web browser</strong>.
        </p>
      </section>

      <section>
        <h2>2. Zero Server Storage</h2>
        <p>
          We do not operate a backend file storage system. Files selected for processing are loaded into your temporary browser memory 
          and discarded immediately after the operation is complete or when you close the tab.
        </p>
      </section>

      <section>
        <h2>3. Anonymous Metrics</h2>
        <p>
          We may collect anonymous, non-personally identifiable usage data (e.g., number of merges performed) to improve 
          infrastructure performance. This data is never linked to your identity or document content.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Libraries</h2>
        <p>
          We use <strong>pdf-lib</strong>, a trusted open-source PDF manipulation library. All processing logic 
          is contained within our frontend bundle.
        </p>
      </section>

      <section>
        <h2>5. Secure Communications</h2>
        <p>
          Our website is served over HTTPS to ensure that the application bundle itself is securely delivered to your machine.
        </p>
      </section>
    </div>
  );
}
