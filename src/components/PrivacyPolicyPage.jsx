import React from 'react';
import Footer from './Footer';
import '../privacy.css';

export default function PrivacyPolicyPage({
  onNavigateAbout,
  onNavigateHome,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onNavigateBlogs,
  onNavigatePage,
  onOpenEnquire,
}) {
  return (
    <div className="privacy-page">
      <header className="privacy-hero">
        <div className="privacy-wrap">
          <h1>Privacy Policy</h1>
          <p>How Nexus Group handles the information you share with us. Last updated 17 November 2026.</p>
        </div>
      </header>

      <main className="privacy-body">
        <div className="privacy-wrap">
          <section>
            <h2>Who we are</h2>
            <p>
              This policy applies to nexuspune.in, operated by Nexus Group, Plot No. P-087, D-II Block, MIDC,
              Pimpri Industrial Area, near Wonder Cars Showroom, KSB Chowk, Chinchwad, Pune, Maharashtra 411019.
              For privacy questions, write to <a href="mailto:info@nexuspune.in">info@nexuspune.in</a> or call
              +91 20 6789 9900.
            </p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>When you use a form on this website, we collect the details you choose to send, which can include:</p>
            <ul>
              <li>Your name, phone number, and email address.</li>
              <li>The project, role, or message you ask about.</li>
              <li>For a channel partner enquiry, your agency name and MahaRERA registration number.</li>
              <li>For a career enquiry, your experience and any resume or portfolio link you provide.</li>
            </ul>
            <p>
              The site also receives standard technical information from your browser, such as the page you visited,
              through Google Analytics.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <p>We use this information to:</p>
            <ul>
              <li>Reply to enquiries about homes, site visits, vendor work, and channel partnerships.</li>
              <li>Review career submissions.</li>
              <li>Keep a record of the enquiry so the right team can follow up.</li>
              <li>Understand how the website is used, so we can improve it.</li>
            </ul>
          </section>

          <section>
            <h2>Who receives it</h2>
            <p>
              Enquiry details are saved to a Google Sheet used by Nexus and emailed to the relevant Nexus inbox.
              Sales enquiries go to info@nexuspune.in, career submissions go to hr@nexuspune.in, and channel partner
              enquiries go to samarth@nexuspune.in. We do not sell your information.
            </p>
          </section>

          <section>
            <h2>Cookies and analytics</h2>
            <p>
              Google Analytics uses cookies to count visits and see which pages are used. You can block or delete
              cookies in your browser. The site will still work if you do.
            </p>
          </section>

          <section>
            <h2>How long we keep it</h2>
            <p>
              We keep enquiry and application details for as long as we need them to respond, maintain our records,
              and meet legal requirements. You can ask us to update or delete the details you sent.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You can ask what information we hold from your enquiry, ask us to correct it, or ask us to delete it
              by emailing <a href="mailto:info@nexuspune.in">info@nexuspune.in</a>. We will respond to a reasonable
              request.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              If this policy changes, the updated version will be posted on this page with a new date.
            </p>
          </section>
        </div>
      </main>

      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateHome={onNavigateHome}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onNavigatePage={onNavigatePage}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
