import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      {/* Brand divider line */}
      <div className="h-1 bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Footer content */}
      <div className="bg-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 lg:gap-x-16">
            {/* Company Information */}
            <div>
              <h2 className="text-[22px] font-semibold text-mp-ink mb-4">
                Company Info
              </h2>
              <p className="text-base text-mp-ink leading-relaxed">
                MetaPhase EDG, your partner in cutting-edge technology and management
                consulting solutions designed, built, and secured for government.
              </p>
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
                  '611420',
                ].map((code) => (
                  <span key={code} className="text-lg text-mp-ink">
                    {code}
                  </span>
                ))}
              </div>
            </div>

            {/* Contract Vehicles */}
            <div>
              <h3 className="text-xl font-semibold text-mp-ink mb-4">Contract Vehicles:</h3>
              <ul className="space-y-1">
                <li className="text-lg text-mp-ink">GSA MAS</li>
                <li className="text-lg text-mp-ink">NASA SEWP VI</li>
              </ul>
              <Link
                to="/contract-vehicles"
                className="mt-2 inline-block text-base font-semibold text-mp-edg-blue hover:text-mp-orange transition-colors underline"
              >
                View contract vehicles
              </Link>
            </div>

            {/* Logo + Contact */}
            <div className="flex flex-col items-center lg:items-end gap-1">
              <img
                src="/images/logo-large.png"
                alt="MetaPhase EDG logo"
                className="h-40 w-auto max-w-full object-contain"
              />
              <div className="text-center lg:text-right">
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
            11911 Freedom Dr, Ste 1010, Reston, VA 20190
          </p>
        </div>
      </div>
    </footer>
  );
}
