import { useState } from 'react';
import Seo from '../components/Seo';
import { breadcrumbLd } from '../lib/jsonld';
import { submitContact, FORM_NAME, type ContactFields } from '../lib/contactSubmit';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFields>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitContact(formData);
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldClass =
    'w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 text-base text-mp-ink placeholder-gray-500 focus:border-mp-edg-blue focus:outline-none transition-colors';

  return (
    <div>
      <Seo
        title="Contact"
        description="Contact MetaPhase EDG — Reston, VA. Email info@metaphaseedg.com or call 703-399-4069 to learn more about our government technology and consulting solutions."
        path="/contact"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h1 className="text-[22px] font-semibold text-mp-ink mb-2">
            Problem Solvers for a Digital World
          </h1>
          <h2 className="text-[44px] sm:text-[56px] font-semibold text-mp-edg-blue leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-[22px] sm:text-[26px] font-light text-mp-ink">
            Want to learn more about MetaPhase EDG?
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="sr-only">Our contact details</h2>
              <div className="space-y-4">
                <p className="text-base text-mp-ink">
                  11911 Freedom Dr<br />
                  Ste 1010<br />
                  Reston, VA 20190
                </p>
                <a
                  href="mailto:info@metaphaseedg.com"
                  className="block text-base text-mp-ink hover:text-mp-orange transition-colors"
                >
                  info@metaphaseedg.com
                </a>
                <a
                  href="tel:+17033994069"
                  className="block text-base text-mp-ink hover:text-mp-orange transition-colors"
                >
                  703-399-4069
                </a>
              </div>

              {/* JV illustration */}
              <div className="mt-8">
                <img
                  src="/images/jv-icons.png"
                  alt="MetaPhase EDG joint venture"
                  className="w-full max-w-sm"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="sr-only">Send us a message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center" role="status">
                  <p className="text-lg text-green-800">
                    Thank you! Your message has been sent — we&rsquo;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify Forms plumbing */}
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  <p className="hidden">
                    <label>
                      Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="sr-only">First Name</label>
                      <input
                        type="text" id="firstName" name="firstName" placeholder="First Name"
                        required autoComplete="given-name"
                        value={formData.firstName} onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">Last Name</label>
                      <input
                        type="text" id="lastName" name="lastName" placeholder="Last Name"
                        required autoComplete="family-name"
                        value={formData.lastName} onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email" id="email" name="email" placeholder="Email"
                      required autoComplete="email"
                      value={formData.email} onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message" name="message" placeholder="Message" rows={5} required
                      value={formData.message} onChange={handleChange}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-10 py-3 bg-mp-orange text-white text-base font-medium rounded-full hover:bg-mp-orange-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-mp-edg-blue focus-visible:ring-offset-2 transition-colors duration-300 disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
