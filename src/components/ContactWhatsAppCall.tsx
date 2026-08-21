import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2, Sparkles, UserCheck, CalendarCheck, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

export const ContactWhatsAppCall: React.FC = () => {
  const whatsappTemplates = [
    {
      title: 'Wedding Reception Catering (500+ Guests)',
      msg: `Hello Food Bazar Caterer! I am planning a Wedding Reception in Kolkata and would love to get a custom menu quote & package details for 500+ guests.`
    },
    {
      title: 'Bengali Bhoj & Royal Mutton Biryani Menu',
      msg: `Hi Food Bazar Caterer, I am interested in your Bengali Bhoj (Chingri Malai Curry, Bhetki Paturi) & Mutton Biryani packages. Please share menu details and pricing.`
    },
    {
      title: 'Schedule a Food Tasting Session',
      msg: `Hello! We are finalizing caterers for our upcoming family wedding and would like to schedule a menu consultation and food tasting with Food Bazar Caterer.`
    },
    {
      title: 'Corporate / Sangeet Live Counter Inquiry',
      msg: `Hi team Food Bazar Caterer, please share rates for Live Tandoor Kebab counters and illuminated Salad & Chaat stations for an upcoming party.`
    }
  ];

  return (
    <section id="contact-hub" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              Instant Communication Desk
            </span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926]">
            WhatsApp & <span className="italic text-[#C5A059] font-normal">Direct Call Desk</span>
          </h2>
          <p className="text-[#5E574F] text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            Speak directly with our senior catering director at <strong className="text-[#2D2926] font-bold">{BUSINESS_INFO.phoneFormatted}</strong> for instantaneous quotes, menu consultations, and date reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xs p-6 sm:p-8 border border-[#EAE7E1] shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="serif text-xl sm:text-2xl font-light text-[#2D2926]">
                    WhatsApp Concierge
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">
                    Active 24x7 • Direct Line: {BUSINESS_INFO.phoneFormatted}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5E574F] mb-6 leading-relaxed">
                Click any of our pre-composed query templates below to instantly launch WhatsApp with our catering directors:
              </p>

              {/* Quick WhatsApp Templates */}
              <div className="space-y-2.5 mb-6">
                {whatsappTemplates.map((item, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xs bg-[#FDFBF7] hover:bg-emerald-50/50 border border-gray-200 hover:border-emerald-500 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2D2926] group-hover:text-emerald-800">
                        {item.title}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider bg-emerald-700 text-white font-bold px-2 py-0.5 rounded-full">
                        Chat ➔
                      </span>
                    </div>
                    <p className="text-[11px] text-[#7C7368] mt-1 line-clamp-1 italic">
                      "{item.msg}"
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <a
              id="btn-whatsapp-direct-large"
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Food%20Bazar%20Caterer,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-full shadow-xs transition flex items-center justify-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp (+91 {BUSINESS_INFO.phone})</span>
            </a>
          </div>

          {/* Call & Direct Hotline Card */}
          <div className="bg-[#2D2926] text-white rounded-xs p-6 sm:p-8 border border-[#C5A059] shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-[#C5A059] text-[#2D2926] rounded-full flex items-center justify-center shadow-xs">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="serif text-xl sm:text-2xl font-light text-white">
                    Direct Phone Hotline
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                    Banquet Consultation • 9:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

              {/* Main Call Banner */}
              <div className="bg-black/30 border border-[#C5A059]/40 rounded-xs p-6 mb-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-2">
                  Call Senior Banquet Specialist
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="serif text-3xl sm:text-4xl font-light text-white hover:text-[#C5A059] transition inline-block tracking-wide"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <p className="text-[11px] uppercase tracking-wider text-[#EAE7E1]/70 mt-2">
                  Click on mobile to dial immediately
                </p>
              </div>

              {/* Consultation Info Points */}
              <div className="space-y-3 mb-6 bg-black/20 border border-white/10 rounded-xs p-5">
                <div className="flex items-start space-x-3 text-xs text-white/90">
                  <CalendarCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Instant Date Availability Check</strong>
                    <span className="text-[11px] text-[#EAE7E1]/70">Find out auspicious wedding date availability immediately on call.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs text-white/90">
                  <Utensils className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Bespoke Menu Customization</strong>
                    <span className="text-[11px] text-[#EAE7E1]/70">Discuss custom per-plate budgets, live counters, and fish/mutton selections.</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              id="btn-call-direct-large"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full bg-white hover:bg-gray-100 text-[#2D2926] font-bold py-3.5 rounded-full shadow-xs transition flex items-center justify-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Dial Directly: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
