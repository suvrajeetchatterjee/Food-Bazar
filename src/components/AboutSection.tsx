import React from 'react';
import { Utensils, CheckCircle2, ShieldCheck, Sparkles, ChefHat, Award, HeartHandshake, Flame } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/cateringData';
import driveImg5 from '../assets/photos/drive_img_5.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative overflow-hidden border-b border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Border frame */}
              <div className="gold-border p-2 bg-white rounded-sm shadow-sm">
                <div className="rounded-xs overflow-hidden bg-[#2D2926] relative aspect-[4/5]">
                  <img
                    src={driveImg5}
                    alt="Master Chefs Live Tandoor and Skewers Preparation"
                    className="w-full h-full object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Bottom Overlay Label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/80 to-transparent p-6 text-white">
                    <div className="flex items-center space-x-2 text-[#C5A059] mb-1">
                      <ChefHat className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Master Artisanal Chefs</span>
                    </div>
                    <h3 className="serif text-lg font-light text-white">Hand-Hammered Brass Banquets</h3>
                    <p className="text-xs text-[#EAE7E1]/80 mt-1">Chicken Noorjahani • Kolkata Mutton Biryani • Chingri Malai</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Box */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#2D2926] border border-[#C5A059] text-white p-4 sm:p-5 rounded-xs shadow-xl max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xs bg-[#C5A059]/20 text-[#C5A059]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">FSSAI Certified</div>
                    <div className="text-xs font-bold text-white tracking-wider">Lic: {BUSINESS_INFO.licenseNumber}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                The Heritage of Hospitality
              </span>
            </div>

            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926] leading-[1.15]">
              Where Royal Tradition <br />
              <span className="italic text-[#C5A059] font-normal">Meets Gourmet Perfection</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5E574F] leading-relaxed font-normal">
              Inspired by the majestic banquets of Bengal and Mughlai culinary aristocracy, <strong className="text-[#2D2926] font-semibold">{BUSINESS_INFO.name}</strong> brings an unmatched symphony of authentic aromas, heritage recipes, and opulent presentation to your celebrations.
            </p>

            <p className="text-xs sm:text-sm text-[#70675D] leading-relaxed">
              Whether you are hosting a traditional Bengali wedding (Bibaho / Boubhat), a vibrant Sangeet cocktail evening, or a high-profile corporate gala in Kolkata, our experienced team ensures meticulous culinary execution from bespoke illuminated salad counters to live skewered charcoal tandoors.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xs border border-[#EAE7E1] hover:border-[#C5A059] shadow-xs transition">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#2D2926] text-[#C5A059] flex items-center justify-center font-bold">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h4 className="serif font-bold text-sm text-[#2D2926]">Signature Handi Specialties</h4>
                </div>
                <p className="text-xs text-[#70675D] leading-relaxed">Mutton Biryani with tender potato, aromatic Chicken Noorjahani, & Jumbo Chingri Malai Curry.</p>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#EAE7E1] hover:border-[#C5A059] shadow-xs transition">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#2D2926] text-[#C5A059] flex items-center justify-center font-bold">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="serif font-bold text-sm text-[#2D2926]">Live Tandoor & Skewers</h4>
                </div>
                <p className="text-xs text-[#70675D] leading-relaxed">Master chefs grilling seekh kebabs, fish fillets, and paneer tikkas right before your guests.</p>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#EAE7E1] hover:border-[#C5A059] shadow-xs transition">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#2D2926] text-[#C5A059] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="serif font-bold text-sm text-[#2D2926]">Uncompromising Hygiene</h4>
                </div>
                <p className="text-xs text-[#70675D] leading-relaxed">Strict food safety standards, mineral water cooking options, and certified staff in uniform.</p>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#EAE7E1] hover:border-[#C5A059] shadow-xs transition">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#2D2926] text-[#C5A059] flex items-center justify-center font-bold">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="serif font-bold text-sm text-[#2D2926]">Dedicated Banquet Captains</h4>
                </div>
                <p className="text-xs text-[#70675D] leading-relaxed">End-to-end guest coordination, VIP hospitality, and seamless replenishment all evening.</p>
              </div>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="#book-meeting"
                className="bg-[#2D2926] hover:bg-[#C5A059] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-7 py-3.5 rounded-full transition shadow-xs inline-flex items-center space-x-2"
              >
                <span>Request Custom Proposal</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-[#2D2926] hover:text-[#C5A059] font-bold text-xs uppercase tracking-wider underline underline-offset-4"
              >
                Call: {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
