import React, { useState } from 'react';
import { X, Calculator, Utensils, Sparkles, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface PriceEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriceEstimatorModal: React.FC<PriceEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState(400);
  const [tier, setTier] = useState<'classic' | 'royal' | 'imperial' | 'maharaja'>('royal');
  const [includeLiveCounters, setIncludeLiveCounters] = useState(true);
  const [includeIlluminatedSalad, setIncludeIlluminatedSalad] = useState(true);

  if (!isOpen) return null;

  const tiers = {
    classic: {
      name: 'Classic Heritage Banquet',
      baseRate: 750,
      items: ['Fish Fry / Paneer Tikka', 'Kolkata Mutton Biryani / Pulao', 'Chicken Chaap / Rezala', 'Chholar Dal & Luchi', 'Gulab Jamun & Ice Cream']
    },
    royal: {
      name: 'Royal Handi & Feast (Most Popular)',
      baseRate: 1100,
      items: ['Live Reshmi Kebabs', 'Chicken Noorjahani', 'Royal Mutton Biryani', 'Chingri Malai Curry', 'Bhetki Paturi', 'Baked Rosogolla & Saffron Rabdi']
    },
    imperial: {
      name: 'Imperial Grandeur with Live Counters',
      baseRate: 1550,
      items: ['Live Tandoor Skewers', 'Illuminated Salad & Chaat Bar', 'Whole Kolkata Bhetki Paturi', 'Mutton Kosha & Radhaballabhi', 'Live Puchka Stall', 'Nolen Gurer Soufflé']
    },
    maharaja: {
      name: 'Maharaja Bespoke Luxury',
      baseRate: 2100,
      items: ['Exotic Seafood & Jumbo Prawns', 'Live Flambé Dessert Stalls', 'Handmade Silver Plate Service', 'VIP Butler Hospitality', 'Custom Mocktail Bar', 'Complete Stage & Chafing Handis']
    }
  };

  let perPlateRate = tiers[tier].baseRate;
  if (includeLiveCounters && tier === 'classic') perPlateRate += 150;
  if (includeIlluminatedSalad && tier === 'classic') perPlateRate += 80;

  const totalEstimated = guests * perPlateRate;

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2926]/90 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white border border-[#C5A059] text-[#2D2926] rounded-xs max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="p-2.5 rounded-full bg-[#C5A059] text-white">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="serif text-xl sm:text-2xl font-light text-[#2D2926]">
              Budget & <span className="italic text-[#C5A059] font-normal">Plate Estimator</span>
            </h3>
            <p className="text-xs text-[#5E574F] font-light">
              Transparent estimation tool for your banquet and feast planning
            </p>
          </div>
        </div>

        {/* Guest Count Slider */}
        <div className="bg-[#FDFBF7] border border-[#EAE7E1] rounded-xs p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C7368]">Guest Count:</span>
            <span className="serif text-lg font-bold text-[#C5A059]">{guests} Guests</span>
          </div>
          <input
            type="range"
            min={50}
            max={2000}
            step={25}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full accent-[#C5A059] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>50 Guests</span>
            <span>1,000 Guests</span>
            <span>2,000 Guests</span>
          </div>
        </div>

        {/* Package Selector */}
        <div className="space-y-2 mb-4">
          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#7C7368] mb-1">
            Choose Banquet Tier:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(tiers) as (keyof typeof tiers)[]).map((tKey) => (
              <button
                key={tKey}
                onClick={() => setTier(tKey)}
                className={`p-3 rounded-xs border text-left transition cursor-pointer ${
                  tier === tKey
                    ? 'bg-[#FDFBF7] border-[#C5A059] shadow-xs'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="serif text-xs font-bold text-[#2D2926] line-clamp-1">{tiers[tKey].name}</div>
                <div className="text-[11px] text-[#C5A059] font-medium mt-0.5">₹{tiers[tKey].baseRate} / Plate</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Result */}
        <div className="bg-[#2D2926] border border-[#C5A059] rounded-xs p-4 sm:p-5 mb-5 flex items-center justify-between text-white shadow-xs">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059] block">
              Estimated Total ({guests} Guests @ ₹{perPlateRate}/plate)
            </span>
            <div className="serif text-2xl sm:text-3xl font-light text-white my-0.5">
              ₹{totalEstimated.toLocaleString('en-IN')}
            </div>
            <span className="text-[10px] text-emerald-400 font-light">Includes royal brass handis & service staff</span>
          </div>

          <a
            href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(`Hello Food Bazar Caterer, I used your estimator for ${guests} guests under the ${tiers[tier].name} (Estimated ₹${totalEstimated.toLocaleString('en-IN')}). Please send the official quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-800 text-white p-3 rounded-full font-bold text-[11px] uppercase tracking-wider flex items-center space-x-1.5 shadow-xs transition"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Lock Quote</span>
          </a>
        </div>

        <div className="flex items-center justify-between text-xs text-[#7C7368]">
          <span className="text-[10px] italic">* Final rates may vary based on exact custom menu selections.</span>
          <button
            onClick={onClose}
            className="text-[#2D2926] hover:text-[#C5A059] text-[11px] uppercase tracking-wider font-bold cursor-pointer underline underline-offset-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
