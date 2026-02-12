import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-[22px] font-normal text-[#16163F] mb-4">
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
            <h3 className="text-xl font-normal text-[#16163F] mb-4">NAICS Codes:</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {[
                '541611', '541519', '541512', '541511',
                '541880', '541330', '541990', '541618',
                '611430', '611420',
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
              src="/images/logo.png"
              alt="MetaPhase EDG logo"
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link
            to="/privacy-policy"
            className="text-base text-[#16163F] hover:text-[#9E3FFD] transition-colors"
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
