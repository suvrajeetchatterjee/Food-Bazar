import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Utensils, Calendar, ShieldCheck, User, Menu, X, Star, LogOut } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onLogout, onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Royal Menus', href: '#menus' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Bookings', href: '#book-meeting' },
    { label: 'WhatsApp & Call', href: '#contact-hub' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FDFBF7]/95 text-[#2D2926] backdrop-blur-md shadow-sm border-b border-[#EAE7E1] py-3' 
        : 'bg-[#FDFBF7]/90 text-[#2D2926] backdrop-blur-sm border-b border-gray-200/80 py-4'
    }`}>
      {/* Top micro bar for FSSAI badge & Helpline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#6E675F] border-b border-gray-200/60 pb-2 mb-2.5 font-medium">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-[#2D2926]">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
            FSSAI LIC: <strong className="ml-1 text-[#2D2926]">{BUSINESS_INFO.licenseNumber}</strong>
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-[#877E75]">Artisanal Culinary Experiences • Est. 2002</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenEstimator}
            className="text-[#2D2926] hover:text-[#C5A059] transition flex items-center font-bold cursor-pointer"
          >
            <Utensils className="w-3 h-3 mr-1 text-[#C5A059]" />
            Budget / Plate Estimator
          </button>
          <span className="text-gray-300">|</span>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`} 
            className="text-[#2D2926] hover:text-[#C5A059] transition font-bold flex items-center"
          >
            <Phone className="w-3 h-3 mr-1 text-[#C5A059]" />
            Helpline: {BUSINESS_INFO.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C5A059] p-0.5 flex items-center justify-center group-hover:bg-[#C5A059] transition">
              <div className="w-full h-full bg-[#2D2926] rounded-full flex items-center justify-center text-[#C5A059] group-hover:text-white transition">
                <Utensils className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="serif text-xl sm:text-2xl font-light tracking-tight text-[#2D2926] block leading-none">
                FOOD BAZAR <span className="italic text-[#C5A059] font-normal">Caterer</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#877E75] uppercase block mt-1">
                Artisanal Culinary Experiences since 2002
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.2em] font-medium text-[#2D2926] mr-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C5A059] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#C5A059] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Auth */}
          <div className="hidden sm:flex items-center space-x-3.5 pl-4 sm:pl-6 border-l border-[#EAE7E1]">
            {user ? (
              <div className="flex items-center space-x-2.5 bg-white border border-[#C5A059]/40 rounded-full py-1 pl-1.5 pr-3 shadow-xs transition duration-200">
                {user.picture ? (
                  <img 
                    src={user.picture} 
                    alt={user.name} 
                    className="w-6 h-6 rounded-full border border-[#C5A059] object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#2D2926] text-[#C5A059] flex items-center justify-center text-[10px] font-bold serif border border-[#C5A059]/40">
                    {user.name.charAt(0)}
                  </div>
                )}
                <span className="text-[11px] font-medium text-[#2D2926] max-w-[110px] truncate whitespace-nowrap">{user.name}</span>
                <button
                  onClick={onLogout}
                  title="Sign Out"
                  className="text-gray-400 hover:text-red-600 ml-0.5 p-0.5 hover:bg-red-50 rounded-full transition cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                id="btn-nav-google-login"
                onClick={onOpenAuth}
                className="group inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] font-semibold bg-white hover:bg-[#2D2926] text-[#2D2926] hover:text-[#FDFBF7] px-3.5 py-1.5 rounded-full border border-[#C5A059]/60 hover:border-[#2D2926] transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 11.5 0 14s.6 4.8 1.6 6.8l3.7-6.1z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 19.1C3.5 22.9 7.4 25 12 25z"/>
                </svg>
                <span className="whitespace-nowrap">Sign In</span>
              </button>
            )}

            <a
              id="btn-nav-whatsapp"
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Food%20Bazar%20Caterer,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D2926] hover:bg-[#C5A059] text-white p-2 rounded-full shadow-xs transition"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <a
              id="btn-nav-book-top"
              href="#book-meeting"
              className="bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 rounded-full shadow-xs transition flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Bookings</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-[#C5A059] text-white p-2 rounded-full"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#2D2926] p-2 hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-200 pb-4 bg-white rounded-2xl px-4 shadow-xl border">
            <div className="flex flex-col space-y-3 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#2D2926] hover:text-[#C5A059] py-1 text-xs uppercase tracking-wider font-semibold border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-2 flex flex-col space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator();
                  }}
                  className="w-full bg-[#FDFBF7] text-[#2D2926] border border-[#C5A059] py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
                >
                  <Utensils className="w-4 h-4 text-[#C5A059]" />
                  <span>Cost / Plate Estimator</span>
                </button>

                {user ? (
                  <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-2">
                      {user.picture ? (
                        <img src={user.picture} alt="" className="w-6 h-6 rounded-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#2D2926] text-[#C5A059] flex items-center justify-center text-[10px] font-bold serif">
                          {user.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-xs text-[#2D2926] truncate max-w-[150px]">{user.name}</span>
                    </div>
                    <button onClick={onLogout} className="text-xs text-red-500 font-semibold">Sign Out</button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth();
                    }}
                    className="w-full bg-white hover:bg-[#FDFBF7] border border-[#C5A059]/60 text-[#2D2926] py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                      <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 11.5 0 14s.6 4.8 1.6 6.8l3.7-6.1z"/>
                      <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 19.1C3.5 22.9 7.4 25 12 25z"/>
                    </svg>
                    <span>Sign In</span>
                  </button>
                )}

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-[#2D2926] text-white py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
