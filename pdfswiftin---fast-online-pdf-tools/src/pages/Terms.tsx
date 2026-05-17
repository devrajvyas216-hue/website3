import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto prose prose-slate">
      <SEO title="Terms & Conditions" description="Terms and conditions for using PDFswift solutions for PDF problems." />
      
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>
      <p className="text-sm text-slate-500">Last Updated: May 14, 2026</p>

      <section>
        <h2>1. Acceptance of Use</h2>
        <p>
          By using PDFswift, you acknowledge that our tools are provided on a best-effort basis for document manipulation. 
          The technical processing happens in-browser, and no liability is assumed for document corruption or accidental loss.
        </p>
      </section>

      <section>
        <h2>2. Usage Limits</h2>
        <p>
          PDFswift is free for personal and commercial use. However, automated scraping or batch processing 
          via bots is strictly prohibited to maintain performance for human users.
        </p>
      </section>

      <section>
        <h2>3. Disclaimer of Liability</h2>
        <p>
          PDFswift is not liable for any data loss, security breaches on your local machine, or errors in the final 
          PDF output. Always verify your documents after manipulation.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          Your documents remain your property. PDFswift claims no rights to any data processed through our platform. 
          The application code and branding are the property of PDFswift.
        </p>
      </section>

      <section>
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time to reflect new features or regulatory requirements. 
          Continued use of the service constitutes acceptance of the new terms.
        </p>
      </section>
    </div>
  );
}
