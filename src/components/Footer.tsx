import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      {/* Brand divider line */}
      <div className="h-1 bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Footer content */}
      <div className="bg-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h2 className="text-[22px] font-semibold text-mp-ink mb-4">
                Company Information
              </h2>
              <p className="text-base text-mp-ink leading-relaxed mb-4">
                MetaPhase EDG, your partner in cutting-edge technology and management
                consulting solutions designed, built, and secured for government.
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

            {/* NAICS Codes */}
            <div>
              <h3 className="text-xl font-semibold text-mp-ink mb-4">NAICS Codes:</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {[
                  '541611', '541330',
                  '541519', '541990',
                  '541512', '541618',
                  '541511', '611430',
                  '541880', '611420',
                ].map((code) => (
                  <span key={code} className="text-lg text-mp-ink">
                    {code}
                  </span>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/logo-large.png"
                alt="MetaPhase EDG logo"
                className="h-44 w-auto object-contain"
              />
            </div>
          </div>

          {/* Contract vehicles / clearance strip */}
          <div className="mt-10 border-t border-gray-100 pt-6">
            <div className="flex flex-col gap-2 text-sm text-mp-ink sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
              <span className="font-semibold text-mp-ink">How to reach us on contract:</span>
              <span>
                <span className="font-semibold">GSA MAS</span> #47QTCA26D002G &middot; SINs 541611, 54151S
              </span>
              <span><span className="font-semibold">MetaPhase SBIR</span> (Phase III)</span>
              <span><span className="font-semibold">TS</span> Facility Clearance</span>
              <Link
                to="/contract-vehicles"
                className="font-semibold text-mp-edg-blue hover:text-mp-edg-blue-dark underline"
              >
                See all contract vehicles &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brand divider line */}
      <div className="h-1 bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Bottom Bar */}
      <div className="bg-white">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link
            to="/privacy-policy"
            className="text-base text-mp-ink hover:text-mp-orange transition-colors underline"
          >
            Privacy Policy
          </Link>
          <p className="text-base text-mp-ink">
            11911 Freedom Dr. Suite 1010 Reston, VA 20190
          </p>
        </div>
      </div>
    </footer>
  );
}
