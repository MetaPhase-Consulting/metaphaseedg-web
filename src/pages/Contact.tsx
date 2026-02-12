import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@metaphaseedg.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section — centered to match original */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h1 className="text-[22px] font-semibold text-[#16163F] mb-2">
            Problem Solvers for a Digital World
          </h1>
          <h2 className="text-[56px] font-semibold text-[#9E3FFD] leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-[26px] font-light text-[#16163F]">
            Want to learn more about MetaPhase EDG?
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="relative py-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="space-y-4">
                <p className="text-base text-[#16163F]">
                  11911 Freedom Dr. Suite 1010<br />
                  Reston, VA 20190
                </p>
                <a
                  href="mailto:info@metaphaseedg.com"
                  className="block text-base text-[#16163F] hover:text-[#9E3FFD] transition-colors"
                >
                  info@metaphaseedg.com
                </a>
                <a
                  href="tel:301-537-3719"
                  className="block text-base text-[#16163F] hover:text-[#9E3FFD] transition-colors"
                >
                  301-537-3719
                </a>
              </div>

              {/* JV illustration */}
              <div className="mt-8">
                <img
                  src="/images/jv-icons.png"
                  alt="MetaPhase EDG"
                  className="w-full max-w-sm"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <p className="text-lg text-green-800">
                    Thank you! Your email client should open with the message pre-filled.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 text-base text-[#16163F] placeholder-gray-400 focus:border-[#36A6ED] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 text-base text-[#16163F] placeholder-gray-400 focus:border-[#36A6ED] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 text-base text-[#16163F] placeholder-gray-400 focus:border-[#36A6ED] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 text-base text-[#16163F] placeholder-gray-400 focus:border-[#36A6ED] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-10 py-3 bg-[#36A6ED] text-black text-base font-medium rounded-full hover:bg-[#2B8AC7] hover:text-white transition-colors duration-300"
                  >
                    Send
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
