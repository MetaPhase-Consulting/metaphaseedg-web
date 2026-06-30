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
              information simply because you visit, and we do not use cookies, analytics, or
              advertising trackers. The only time we collect personal information is when you choose
              to send it to us through our contact form.
            </p>

            <h3>What we collect and how we use it</h3>

            <p>
              If you fill out our contact form, we collect your name, email address, and the contents
              of your message, and we use that information solely to respond to your inquiry. We do
              not sell or rent your information or use it for marketing. We keep contact submissions
              only as long as needed to respond to and document your inquiry.
            </p>

            <h3>Sharing</h3>

            <p>
              We may share your information with service providers that help us operate the site and
              deliver your message, and when required by law. We do not sell your personal
              information.
            </p>

            <h3>Security</h3>

            <p>
              We use reasonable measures to protect the information you submit, but no method of
              transmission or storage over the Internet is fully secure, so we cannot guarantee
              absolute security.
            </p>

            <h3>Contact</h3>

            <p>
              To ask a privacy question, or to access or delete information you have submitted, email{' '}
              <a
                href="mailto:info@metaphaseedg.com"
                className="text-mp-edg-blue hover:text-mp-orange transition-colors"
              >
                info@metaphaseedg.com
              </a>
              . We may update this policy from time to time; any changes will be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
