import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, Award, ShieldCheck, CheckCircle2, Flame, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/cateringData';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-44 sm:pt-48 md:pt-52 pb-20 overflow-hidden bg-[#FDFBF7] text-[#2D2926] border-b border-[#EAE7E1]">
      {/* Subtle fine background grid / linen texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-repeat"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Micro Eyebrow */}
        <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-8 mt-2">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            Artisanal Culinary Experiences • Est. 2002
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#2D2926] leading-[1.08] mb-6">
          Elegance <span className="italic font-normal">in every</span>{' '}
          <span className="text-[#C5A059] italic font-normal">Detail.</span>
        </h1>

        {/* Subtitle / Editorial excerpt */}
        <p className="text-sm sm:text-base md:text-lg text-[#5E574F] leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          From grand royal weddings to intimate private soirees in Kolkata, we curate banquets that speak the language of timeless celebration. Featuring authentic <strong className="text-[#2D2926] font-semibold">Kolkata Mutton Biryani</strong> in royal hand-hammered brass handis, delicate <strong className="text-[#2D2926] font-semibold">Chicken Noorjahani</strong>, and live artisanal tandoor stations.
        </p>

        {/* Core CTA Action Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 mb-12">
          {/* Book Meeting Button */}
          <a
            id="btn-hero-book"
            href="#book-meeting"
            className="bg-[#2D2926] hover:bg-[#C5A059] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-7 py-4 rounded-full transition shadow-sm flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Your Date</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            id="btn-hero-whatsapp"
            href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Food%20Bazar%20Caterer,%20I%20am%20planning%20an%20event%20and%20would%20like%20to%20know%20menu%20details%20and%20availability.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-emerald-600 text-emerald-800 hover:bg-emerald-50 uppercase tracking-[0.18em] text-[11px] font-bold px-6 py-3.5 rounded-full transition flex items-center justify-center space-x-2 bg-white"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp ({BUSINESS_INFO.phone})</span>
          </a>

          {/* Direct Phone Call */}
          <a
            id="btn-hero-call"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="border border-[#2D2926] text-[#2D2926] hover:bg-[#2D2926] hover:text-white uppercase tracking-[0.18em] text-[11px] font-bold px-6 py-3.5 rounded-full transition flex items-center justify-center space-x-2 bg-transparent"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call Helpline</span>
          </a>

          {/* Estimator Button */}
          <button
            id="btn-hero-estimator"
            onClick={onOpenEstimator}
            className="text-[#2D2926] hover:text-[#C5A059] border-b border-gray-400 hover:border-[#C5A059] uppercase tracking-[0.18em] text-[10px] font-bold py-2 transition flex items-center space-x-1.5 cursor-pointer sm:ml-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Budget & Plate Estimator</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200 max-w-3xl mx-auto text-left">
          <div className="border-l-2 border-[#C5A059] pl-3">
            <span className="serif text-xl font-bold text-[#2D2926] block">{BUSINESS_INFO.experienceYears} Yrs</span>
            <span className="text-[10px] uppercase tracking-wider text-[#7C7368] font-medium">Culinary Mastery</span>
          </div>
          <div className="border-l-2 border-[#C5A059] pl-3">
            <span className="serif text-xl font-bold text-[#2D2926] block">FSSAI</span>
            <span className="text-[10px] uppercase tracking-wider text-[#7C7368] font-medium">Lic: {BUSINESS_INFO.licenseNumber}</span>
          </div>
          <div className="border-l-2 border-[#C5A059] pl-3">
            <span className="serif text-xl font-bold text-[#2D2926] block">{BUSINESS_INFO.eventsCompleted}</span>
            <span className="text-[10px] uppercase tracking-wider text-[#7C7368] font-medium">Events Catered</span>
          </div>
          <div className="border-l-2 border-[#C5A059] pl-3">
            <span className="serif text-xl font-bold text-[#2D2926] block">5.0 ★</span>
            <span className="text-[10px] uppercase tracking-wider text-[#7C7368] font-medium">Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};
