import Seo from '../components/Seo';

export default function PrivacyPolicy() {
  return (
    <div>
      <Seo
        title="Privacy Policy"
        description="MetaPhase EDG runs a static informational website and only collects personal information you choose to submit through the contact form."
        path="/privacy-policy"
      />
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h1 className="text-[22px] font-semibold text-[#16163F] mb-2">
            Problem Solvers for a Digital World
          </h1>
          <h2 className="text-[56px] font-semibold text-[#16163F] leading-tight mb-8">
            Privacy Policy
          </h2>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 bg-white">
        <div className="section-container max-w-4xl">
          <div className="prose prose-lg max-w-none text-[#16163F]">
            <p>
              This is a static informational website for MetaPhase EDG. We do not collect personal
              information simply because you visit. The only time we collect personal information is
              when you choose to send it to us &mdash; for example, by submitting our contact form.
              This policy explains what we collect, how we use it, and the choices you have.
            </p>

            <h3>Information we collect</h3>

            <ul>
              <li>
                <strong>Contact form.</strong> If you fill out our contact form, we collect the
                information you provide: your first and last name, email address, and the contents
                of your message. We use this solely to read and respond to your inquiry.
              </li>
              <li>
                <strong>Hosting and server logs.</strong> Our website is hosted on Netlify. Like most
                web hosts, Netlify automatically records standard technical data such as your IP
                address, browser type, and the date and time of your request for security, reliability,
                and abuse prevention. We do not use this data to identify you.
              </li>
            </ul>

            <p>
              We do not use cookies, web analytics, advertising trackers, or similar technologies on
              this site, and we do not build profiles of visitors.
            </p>

            <h3>How we use your information</h3>

            <p>
              We use the information you submit through the contact form only to respond to your
              message and to follow up with you about your inquiry. We do not use it for marketing,
              and we do not sell or rent it.
            </p>

            <h3>How we share your information</h3>

            <p>We do not sell your personal information. We share it only in limited cases:</p>

            <ul>
              <li>
                <strong>Service providers.</strong> Providers that help us operate the site and
                deliver your message &mdash; such as Netlify (hosting and form delivery) and our email
                provider &mdash; process your information on our behalf.
              </li>
              <li>
                <strong>Legal requirements.</strong> We may disclose information when required by law,
                such as in response to a subpoena, court order, or other legal process.
              </li>
            </ul>

            <h3>Data retention and your choices</h3>

            <p>
              We keep contact-form submissions only as long as needed to respond to and document your
              inquiry. You may ask us to access or delete the personal information you have submitted,
              or ask any privacy-related question, by emailing{' '}
              <a
                href="mailto:info@metaphaseedg.com"
                className="text-mp-edg-blue hover:text-mp-orange transition-colors"
              >
                info@metaphaseedg.com
              </a>
              . We do not sell personal information, including under California law.
            </p>

            <h3>How we protect your information</h3>

            <p>
              We use reasonable measures to protect the information you submit. However, no method of
              transmission over the Internet or method of electronic storage is fully secure, so we
              cannot guarantee absolute security.
            </p>

            <h3>Changes to this policy</h3>

            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this
              page.
            </p>

            <p>
              <em>Last updated: June 2026.</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
