import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contract-vehicles', label: 'Contract Vehicles' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        {/* Logo + two-color wordmark */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4" aria-label="MetaPhase EDG home">
          <img
            src="/images/metaphase-icon.png"
            alt=""
            aria-hidden="true"
            className="h-12 sm:h-16 w-auto shrink-0"
          />
          <div className="min-w-0">
            <span className="text-2xl sm:text-[34px] lg:text-[42px] font-semibold font-work-sans leading-tight block">
              <span className="text-mp-orange">MetaPhase</span>{' '}
              <span className="text-mp-edg-blue">EDG</span>
            </span>
            <p className="text-xs sm:text-base text-mp-ink font-work-sans font-semibold">
              Problem Solvers for a Digital World
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`text-base lg:text-lg font-light transition-colors duration-200 ${
                isActive(link.to)
                  ? 'text-mp-orange'
                  : 'text-mp-ink hover:text-mp-orange'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-mp-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-white border-t border-gray-100 py-4"
          aria-label="Mobile navigation"
        >
          <div className="section-container flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`text-lg font-light py-2 ${
                  isActive(link.to)
                    ? 'text-mp-orange'
                    : 'text-mp-ink hover:text-mp-orange'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
