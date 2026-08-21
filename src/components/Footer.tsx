import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Utensils, Calendar, Heart, Award, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2926] text-[#EAE7E1] border-t border-[#C5A059] pt-20 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A059] flex items-center justify-center text-white">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="serif text-xl font-medium tracking-wider text-white">FOOD BAZAR CATERER</span>
            </div>

            <p className="text-xs text-[#EAE7E1]/80 leading-relaxed font-light">
              Kolkata's premier catering service renowned for opulent wedding banquets, authentic Kolkata Mutton Biryani, Chicken Noorjahani, live charcoal tandoor counters, and impeccable royal hospitality.
            </p>

            <div className="flex items-center space-x-2 bg-black/20 border border-white/10 px-3.5 py-2 rounded-xs text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[#C5A059] font-medium text-[11px]">
                FSSAI / Fasnal Lic: <strong className="text-white font-bold">{BUSINESS_INFO.licenseNumber}</strong>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="serif text-sm font-medium text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#EAE7E1]/80">
              <li><a href="#about" className="hover:text-[#C5A059] transition">About Our Legacy & Chefs</a></li>
              <li><a href="#menus" className="hover:text-[#C5A059] transition">Royal Mughlai & Bengali Menus</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition">Event & Stage Decor Gallery</a></li>
              <li><a href="#book-meeting" className="hover:text-[#C5A059] transition">Book Tasting & Meeting via Email</a></li>
              <li><a href="#contact-hub" className="hover:text-[#C5A059] transition">WhatsApp & Phone Hub</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition">Customer Reviews & Ratings</a></li>
              <li><a href="#faqs" className="hover:text-[#C5A059] transition">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Signature Menus */}
          <div>
            <h4 className="serif text-sm font-medium text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#EAE7E1]/80">
              <li>• Kolkata Mutton Biryani with Aloo</li>
              <li>• Royal Chicken Noorjahani in Cashew Gravy</li>
              <li>• Gold Jumbo Chingri Malai Curry</li>
              <li>• Steamed Kolkata Bhetki Paturi</li>
              <li>• Live Charcoal Tandoor Seekh & Kebabs</li>
              <li>• Illuminated Salad & Plate Bar</li>
              <li>• Baked Rosogolla & Nolen Gur Soufflé</li>
            </ul>
          </div>

          {/* Direct Contact & Helplines */}
          <div>
            <h4 className="serif text-sm font-medium text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="flex items-center space-x-2.5 text-white hover:text-[#C5A059] transition group"
              >
                <div className="p-2 rounded-full bg-white/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#EAE7E1]/60">Helpline / Direct Call:</div>
                  <div className="font-bold serif text-sm">{BUSINESS_INFO.phoneFormatted}</div>
                </div>
              </a>

              <a 
                href={`https://wa.me/91${BUSINESS_INFO.phone}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-white hover:text-emerald-400 transition group"
              >
                <div className="p-2 rounded-full bg-emerald-950 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#EAE7E1]/60">WhatsApp Orders & Inquiries:</div>
                  <div className="font-bold text-xs">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${BUSINESS_INFO.email}`} 
                className="flex items-center space-x-2.5 text-white hover:text-[#C5A059] transition group"
              >
                <div className="p-2 rounded-full bg-white/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#EAE7E1]/60">Official Inquiry Email:</div>
                  <div className="font-bold text-xs">{BUSINESS_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-start space-x-2.5 text-[#EAE7E1]/70 pt-1 font-light">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-[11px]">Serving Kolkata, Salt Lake, New Town, Howrah, Hooghly & Destination Venues</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAE7E1]/60 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-medium">{BUSINESS_INFO.name}</strong>. All rights reserved. Quality Catering Service.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#C5A059] hover:text-white text-[11px] uppercase tracking-widest transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Bottom Quick Action Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#2D2926]/95 border-t border-[#C5A059]/40 backdrop-blur-md px-3 py-2 flex items-center justify-between shadow-2xl">
        <a
          id="btn-mobile-call"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 mr-1.5 bg-black/40 border border-white/20 text-white py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Now</span>
        </a>

        <a
          id="btn-mobile-whatsapp"
          href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Food%20Bazar%20Caterer,%20I%20would%20like%20to%20inquire%20about%20event%20catering.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 mx-1.5 bg-emerald-700 text-white py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          id="btn-mobile-meeting"
          href="#book-meeting"
          className="flex-1 ml-1.5 bg-[#C5A059] hover:bg-[#b08d48] text-white py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1 text-center"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Meet</span>
        </a>
      </div>
    </footer>
  );
};
