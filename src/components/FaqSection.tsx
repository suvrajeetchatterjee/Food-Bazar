import React, { useState } from 'react';
import { FAQS } from '../data/cateringData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Search, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              Common Inquiries & Guidelines
            </span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926]">
            Frequently Asked <span className="italic text-[#C5A059] font-normal">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5E574F] mt-3 leading-relaxed">
            Everything you need to know regarding date booking, custom menu tastings, FSSAI hygiene standards, and banquet operations.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search question (e.g. hygiene, tasting, guest count)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#EAE7E1] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#2D2926] shadow-xs focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xs border border-[#EAE7E1] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition cursor-pointer"
                >
                  <span className="serif text-sm sm:text-base font-normal text-[#2D2926]">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full text-[#7C7368] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#C5A059]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5E574F] leading-relaxed border-t border-gray-100 bg-[#FDFBF7] font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 text-center bg-[#2D2926] text-white rounded-xs p-6 sm:p-8 border border-[#C5A059] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="serif text-lg sm:text-xl font-light text-white">
              Still Have Custom Requirements or Inquiries?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE7E1]/80 mt-1">
              Speak directly with our chief banquet consultant on WhatsApp or direct telephone.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20Food%20Bazar%20Caterer,%20I%20have%20a%20few%20questions%20regarding%20catering%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] uppercase tracking-wider px-5 py-3 rounded-full transition flex items-center space-x-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-[11px] uppercase tracking-wider px-5 py-3 rounded-full transition flex items-center space-x-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
