import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1713] text-[#FAF7F2] pt-20 pb-12 border-t border-[#332A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#332A23]">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl text-[#E6C28B] tracking-wide font-normal">
                Athanaya Villa
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A89886] font-sans -mt-1">
                Jimbaran • Bali • Indonesia
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm pt-2">
              An intimate private pool sanctuary celebrating Balinese artistic craftsmanship, peaceful tropical breezes, and genuine island hospitality in Jimbaran.
            </p>
            {/* Social Media Placeholders */}
            <div className="pt-2 flex items-center space-x-3 text-neutral-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#B58554] hover:text-[#E6C28B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
                id="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#B58554] hover:text-[#E6C28B] flex items-center justify-center transition-colors"
                aria-label="Facebook"
                id="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#B58554] hover:text-[#E6C28B] flex items-center justify-center transition-colors"
                aria-label="TripAdvisor"
                id="social-tripadvisor"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C28B] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Our Story & Ethos</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Villas & Suites</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Image Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Jimbaran Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Reservations</a>
              </li>
            </ul>
          </div>

          {/* Villa Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C28B] font-semibold">
              Villas
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  One Bedroom Private Pool Villa
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Two Bedroom Deluxe Pool Villa
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Three Bedroom Royal Estate
                </a>
              </li>
              <li className="pt-2 text-xs text-[#A89886]">
                All villas include private plunge pool, open-air bath & complimentary floating breakfast.
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C28B] font-semibold">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B58554] shrink-0 mt-1" />
                <span>
                  Jl. Bukit Permai, Jimbaran, Kec. Kuta Selatan, Kabupaten Badung, Bali 80361, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#B58554] shrink-0" />
                <a href="mailto:stay@athanayavilla.com" className="hover:text-white transition-colors">
                  stay@athanayavilla.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#B58554] shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812 3456 7890 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Athanaya Villa. Jimbaran, Bali, Indonesia. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-neutral-400 hover:text-[#E6C28B] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
