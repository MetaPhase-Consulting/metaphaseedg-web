import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      {/* Blue divider line */}
      <div className="h-1 bg-gradient-to-r from-[#36A6ED] to-[#9E3FFD]" />

      {/* Footer content */}
      <div className="bg-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h2 className="text-[22px] font-semibold text-[#16163F] mb-4">
                Company Information
              </h2>
              <p className="text-base text-[#16163F] leading-relaxed mb-4">
                MetaPhase EDG, your partner in cutting-edge technology and management
                consulting solutions designed, built, and secured for government.
              </p>
              <a
                href="mailto:Info@MetaPhaseEDG.com"
                className="text-base text-[#16163F] hover:text-[#9E3FFD] transition-colors"
              >
                Info@MetaPhaseEDG.com
              </a>
            </div>

            {/* NAICS Codes */}
            <div>
              <h3 className="text-xl font-semibold text-[#16163F] mb-4">NAICS Codes:</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {[
                  '541611', '541330',
                  '541519', '541990',
                  '541512', '541618',
                  '541511', '611430',
                  '541880', '611420',
                ].map((code) => (
                  <span key={code} className="text-lg text-[#16163F]">
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
        </div>
      </div>

      {/* Blue divider line */}
      <div className="h-1 bg-gradient-to-r from-[#36A6ED] to-[#9E3FFD]" />

      {/* Bottom Bar */}
      <div className="bg-white">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link
            to="/privacy-policy"
            className="text-base text-[#16163F] hover:text-[#9E3FFD] transition-colors underline"
          >
            Privacy Policy
          </Link>
          <p className="text-base text-[#16163F]">
            11911 Freedom Dr. Suite 1010 Reston, VA 20190
          </p>
        </div>
      </div>
    </footer>
  );
}
