import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currency: Currency;
  onToggleCurrency: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, onToggleCurrency, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Villas', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8E1D7]'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex flex-col tracking-wider focus:outline-hidden"
          id="navbar-brand-link"
        >
          <span
            className={`font-serif text-2xl sm:text-3xl font-medium tracking-wide transition-colors ${
              isScrolled ? 'text-[#2D2723]' : 'text-white'
            }`}
          >
            Athanaya Villa
          </span>
          <span
            className={`text-[10px] sm:text-[11px] uppercase tracking-[0.25em] -mt-1 font-sans ${
              isScrolled ? 'text-[#8C7A6B]' : 'text-neutral-300'
            }`}
          >
            Jimbaran • Bali
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm tracking-wider uppercase font-medium transition-colors hover:text-[#C89B6D] ${
                isScrolled ? 'text-[#4A4036]' : 'text-neutral-100 hover:text-white'
              }`}
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Currency Toggle */}
          <button
            type="button"
            onClick={onToggleCurrency}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
              isScrolled
                ? 'border-[#D9CFBE] text-[#5C4E42] hover:bg-[#F2ECE1]'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            title="Toggle between Indonesian Rupiah and US Dollars"
            id="currency-toggle-btn"
          >
            <span className="opacity-70">Currency:</span> {currency}
          </button>

          {/* Book Now Action */}
          <button
            type="button"
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#B58554] text-white hover:bg-[#9E6E3D] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            id="navbar-book-btn"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            type="button"
            onClick={onToggleCurrency}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-all ${
              isScrolled
                ? 'border-[#D9CFBE] text-[#5C4E42]'
                : 'border-white/40 text-white'
            }`}
            id="mobile-currency-toggle"
          >
            {currency}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-hidden ${
              isScrolled ? 'text-[#2D2723]' : 'text-white'
            }`}
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#FAF7F2] border-b border-[#E3DAC9] px-6 pt-4 pb-6 space-y-4 shadow-xl text-[#2D2723] animate-fade-in"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium py-2 border-b border-[#ECE4D5] text-[#4A4036] hover:text-[#B58554] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#A89886]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl text-center text-xs uppercase tracking-widest font-semibold bg-[#B58554] text-white hover:bg-[#9E6E3D] shadow-sm cursor-pointer"
              id="mobile-nav-book-btn"
            >
              Book Now
            </button>
            <div className="flex items-center justify-center space-x-2 text-xs text-[#7A6B5D] pt-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Jimbaran, Bali, Indonesia</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
