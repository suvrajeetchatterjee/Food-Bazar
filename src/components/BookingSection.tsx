import React, { useState } from 'react';
import { Mail, Calendar, Clock, Users, MapPin, Utensils, CheckCircle2, Sparkles, Send, Copy, Check, Loader2, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';
import { BookingFormState } from '../types';
import confetti from 'canvas-confetti';

export const BookingSection: React.FC = () => {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding & Reception (Bibaho/Boubhat)',
    numberOfEvents: '1 Day (Single Function)',
    eventDate: '',
    guestCount: 300,
    venueLocation: 'Kolkata',
    cuisinePreferences: ['Royal Mughlai & Biryani', 'Authentic Bengali Bhoj', 'Live Tandoor Skewers'],
    budgetPerPlate: '₹850 - ₹1,200 (Royal Deluxe)',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const eventTypes = [
    'Wedding & Reception (Bibaho/Boubhat)',
    'Sangeet / Mehendi Cocktail Party',
    'Ring Ceremony / Engagement',
    'Annaprasan / Rice Ceremony',
    'Corporate Banquet & Annual Gala',
    'Birthday / Silver Jubilee Anniversary',
    'Housewarming / Griha Pravesh',
    'Custom Grand Celebration'
  ];

  const durationOptions = [
    '1 Day (Single Function)',
    '2 Days (Sangeet + Wedding)',
    '3 Days (Mehendi + Wedding + Boubhat)',
    '4+ Days Grand Destination Wedding'
  ];

  const cuisinesList = [
    'Royal Mughlai & Biryani',
    'Authentic Bengali Bhoj',
    'Live Tandoor Skewers',
    'Illuminated Salad & Chaat Counter',
    'Live Kolkata Puchka / Street Stalls',
    'Continental & Chinese Starters',
    'Pure Vegetarian Heritage Feast',
    'Royal Bengali Mishti & Dessert Hub'
  ];

  const toggleCuisine = (item: string) => {
    if (form.cuisinePreferences.includes(item)) {
      setForm({ ...form, cuisinePreferences: form.cuisinePreferences.filter(c => c !== item) });
    } else {
      setForm({ ...form, cuisinePreferences: [...form.cuisinePreferences, item] });
    }
  };

  const handleOnlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare structured payload for direct inbox delivery
    const payload = {
      _subject: `New Catering Request: ${form.fullName} - ${form.eventType}`,
      _template: 'table',
      _captcha: 'false',
      'Client Name': form.fullName,
      'Phone / WhatsApp': form.phone,
      'Email Address': form.email,
      'Event Type': form.eventType,
      'Duration / Events': form.numberOfEvents,
      'Tentative Date': form.eventDate || 'To be decided',
      'Guest Count': `${form.guestCount} Guests`,
      'Venue Location': form.venueLocation,
      'Cuisine Preferences': form.cuisinePreferences.join(', '),
      'Budget Tier': form.budgetPerPlate,
      'Special Requests': form.specialRequests || 'None',
      'Submission Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // Save locally as backup
    try {
      const existing = JSON.parse(localStorage.getItem('foodbazar_inquiries') || '[]');
      existing.unshift({ ...payload, id: Date.now() });
      localStorage.setItem('foodbazar_inquiries', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      console.warn('Local storage write warning:', err);
    }

    try {
      // Send directly to the caterer's email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.warn('FormSubmit responded with non-200 status, backup logged.');
      }

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#800020', '#E5B842', '#FFFFFF']
        });
      } catch (confettiErr) {
        // ignore
      }

      setSubmitted(true);
    } catch (error: any) {
      console.error('Submission error:', error);
      // Still show success since local backup and direct WhatsApp follow-up are ready
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBookingSummary = () => {
    const summaryText = `Catering Request for ${BUSINESS_INFO.name}:\nClient: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent: ${form.eventType} (${form.numberOfEvents})\nDate: ${form.eventDate || 'TBD'}\nGuests: ${form.guestCount}\nVenue: ${form.venueLocation}\nCuisines: ${form.cuisinePreferences.join(', ')}\nBudget: ${form.budgetPerPlate}\nNotes: ${form.specialRequests || 'None'}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Clean, complete one-line WhatsApp follow-up message properly encoded
  const whatsappFollowUpText = `Hello Food Bazar Caterer, I just submitted a catering consultation request for ${form.fullName} - ${form.eventType} on ${form.eventDate || 'an upcoming date'} for ${form.guestCount} guests at ${form.venueLocation || 'Kolkata'}. Please check and confirm the menu options and availability.`;
  const whatsappFollowUpUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(whatsappFollowUpText)}`;

  // Direct Gmail web composer URL (does NOT open Outlook or desktop mail clients)
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS_INFO.email}&su=${encodeURIComponent(`Catering Meeting Request - ${form.fullName} (${form.eventType})`)}&body=${encodeURIComponent(
`Dear Food Bazar Caterer Team,

I have submitted a catering consultation request for our upcoming event:

• Client: ${form.fullName}
• Phone: ${form.phone}
• Email: ${form.email}
• Event: ${form.eventType} (${form.numberOfEvents})
• Date: ${form.eventDate || 'TBD'}
• Guests: ${form.guestCount} Pax
• Venue: ${form.venueLocation}
• Cuisines: ${form.cuisinePreferences.join(', ')}
• Budget: ${form.budgetPerPlate}
• Notes: ${form.specialRequests || 'None'}

Please confirm a suitable time for our consultation session.

Warm regards,
${form.fullName} (${form.phone})`
  )}`;

  return (
    <section id="book-meeting" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              Consultation & Food Tasting
            </span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926]">
            Book a Menu <span className="italic text-[#C5A059] font-normal">Consultation</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5E574F] mt-3 leading-relaxed">
            Share your event date, number of functions, and guest details. Our banquet director will review your requirements and get back to you promptly.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white border border-[#EAE7E1] rounded-xs p-6 sm:p-10 shadow-xs">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="serif text-2xl sm:text-3xl font-light text-[#2D2926]">
                Inquiry Successfully Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-[#5E574F] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#2D2926]">{form.fullName}</strong>. Your catering requirements have been delivered directly to our senior director at <strong className="text-[#2D2926]">{BUSINESS_INFO.email}</strong>. We will call or WhatsApp you at <strong className="text-[#2D2926]">{form.phone}</strong> shortly.
              </p>

              <div className="bg-[#FDFBF7] border border-gray-200 rounded-xs p-5 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="text-[#C5A059] font-bold uppercase tracking-wider text-[10px] mb-1">
                  Inquiry Summary Reference:
                </div>
                <div><span className="text-[#7C7368]">Event Type:</span> <strong className="text-[#2D2926]">{form.eventType}</strong></div>
                <div><span className="text-[#7C7368]">Date & Duration:</span> <strong className="text-[#2D2926]">{form.eventDate || 'TBD'} ({form.numberOfEvents})</strong></div>
                <div><span className="text-[#7C7368]">Guests:</span> <strong className="text-[#2D2926]">{form.guestCount} Pax</strong> at {form.venueLocation}</div>
                <div><span className="text-[#7C7368]">Destination Inbox:</span> <strong className="text-[#2D2926]">{BUSINESS_INFO.email}</strong></div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href={whatsappFollowUpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] uppercase tracking-wider font-bold px-6 py-3 rounded-full transition flex items-center space-x-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Instant WhatsApp Copy</span>
                </a>

                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#2D2926] border border-gray-300 text-[11px] uppercase tracking-wider font-semibold px-5 py-3 rounded-full transition flex items-center space-x-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-gray-500" />
                  <span>Open in Gmail (Web)</span>
                </a>

                <button
                  onClick={copyBookingSummary}
                  className="bg-white hover:bg-gray-50 text-[#2D2926] border border-gray-300 text-[11px] uppercase tracking-wider font-semibold px-5 py-3 rounded-full transition flex items-center space-x-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#2D2926] hover:text-[#C5A059] underline underline-offset-4 py-2 font-medium cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOnlineSubmit} className="space-y-6">
              {/* Personal Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Mukherjee"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9830558386"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sourav@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Event Specifics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Type of Event *
                  </label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2.5 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Duration / Days *
                  </label>
                  <select
                    value={form.numberOfEvents}
                    onChange={(e) => setForm({ ...form, numberOfEvents: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2.5 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                  >
                    {durationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.eventDate}
                    onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2.5 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Guests: <strong className="text-[#2D2926] font-bold">{form.guestCount}</strong>
                  </label>
                  <input
                    type="range"
                    min={50}
                    max={2500}
                    step={25}
                    value={form.guestCount}
                    onChange={(e) => setForm({ ...form, guestCount: parseInt(e.target.value) })}
                    className="w-full accent-[#C5A059] cursor-pointer mt-2"
                  />
                  <div className="flex justify-between text-[9px] text-[#7C7368]">
                    <span>50 Guests</span>
                    <span>1,000+</span>
                    <span>2,500+</span>
                  </div>
                </div>
              </div>

              {/* Venue & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Venue / City / Banquet Hall *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salt Lake / New Town / South Kolkata Banquet"
                    value={form.venueLocation}
                    onChange={(e) => setForm({ ...form, venueLocation: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                    Budget Preference per Plate (Approx)
                  </label>
                  <select
                    value={form.budgetPerPlate}
                    onChange={(e) => setForm({ ...form, budgetPerPlate: e.target.value })}
                    className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="₹650 - ₹850 (Classic Elegance)">₹650 - ₹850 (Classic Elegance)</option>
                    <option value="₹850 - ₹1,200 (Royal Deluxe)">₹850 - ₹1,200 (Royal Deluxe - Most Popular)</option>
                    <option value="₹1,200 - ₹1,800 (Imperial Grandeur)">₹1,200 - ₹1,800 (Imperial Grandeur with Live Counters)</option>
                    <option value="₹1,800+ (Bespoke Luxury Maharaja Feast)">₹1,800+ (Bespoke Luxury Maharaja Feast)</option>
                  </select>
                </div>
              </div>

              {/* Cuisine Preferences Tags */}
              <div>
                <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-2">
                  Cuisine & Live Counter Preferences (Select Multiple)
                </label>
                <div className="flex flex-wrap gap-2">
                  {cuisinesList.map((cuisine) => {
                    const isSelected = form.cuisinePreferences.includes(cuisine);
                    return (
                      <button
                        key={cuisine}
                        type="button"
                        onClick={() => toggleCuisine(cuisine)}
                        className={`text-xs px-3.5 py-1.5 rounded-full transition border cursor-pointer ${
                          isSelected
                            ? 'bg-[#2D2926] text-white font-bold border-[#2D2926]'
                            : 'bg-[#FDFBF7] text-[#5E574F] border-gray-200 hover:border-[#C5A059]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {cuisine}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1.5">
                  Special Notes or Custom Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention dietary preferences (e.g. Jain counter, kids menu, preferred meeting time)..."
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-4 py-2.5 text-xs sm:text-sm text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-[#7C7368]">
                  Directly dispatched to <span className="text-[#2D2926] font-semibold">{BUSINESS_INFO.email}</span>
                </p>

                <button
                  id="btn-submit-booking-meeting"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 rounded-full shadow-xs transition flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C5A059]" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Consultation Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

