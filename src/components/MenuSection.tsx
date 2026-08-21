import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/cateringData';
import { MenuItem } from '../types';
import { Utensils, Sparkles, Flame, Check, Search, Star, Download } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mughlai' | 'bengali' | 'live_starters' | 'salad_bar' | 'desserts'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'Complete Banquet' },
    { key: 'mughlai', label: 'Royal Mughlai & Biryani' },
    { key: 'bengali', label: 'Authentic Bengali Bhoj' },
    { key: 'live_starters', label: 'Live Tandoor & Skewers' },
    { key: 'salad_bar', label: 'Illuminated Salad & Plate' },
    { key: 'desserts', label: 'Heritage Mishti & Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <section id="menus" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              The Royal Culinary Repertoire
            </span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926] tracking-tight">
            Curated Menus for <span className="italic text-[#C5A059] font-normal">Grand Feasts</span>
          </h2>
          <p className="text-[#5E574F] text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            Prepared using heritage spices, pure ghee, and artisanal techniques. Explore our chef-curated banquet selections below.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white border border-[#EAE7E1] p-3 sm:p-4 rounded-xs shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`text-[11px] uppercase tracking-wider font-semibold px-3.5 py-2 rounded-full transition cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#2D2926] text-white shadow-xs'
                    : 'text-[#5E574F] hover:bg-gray-100 hover:text-[#2D2926]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Type Filter & Search */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex bg-[#FDFBF7] p-1 rounded-full border border-gray-200">
              <button
                onClick={() => setTypeFilter('all')}
                className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition font-bold cursor-pointer ${
                  typeFilter === 'all' ? 'bg-[#2D2926] text-white' : 'text-[#5E574F]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setTypeFilter('non-veg')}
                className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition font-bold flex items-center space-x-1 cursor-pointer ${
                  typeFilter === 'non-veg' ? 'bg-red-700 text-white' : 'text-[#5E574F]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                <span>Non-Veg</span>
              </button>
              <button
                onClick={() => setTypeFilter('veg')}
                className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition font-bold flex items-center space-x-1 cursor-pointer ${
                  typeFilter === 'veg' ? 'bg-emerald-700 text-white' : 'text-[#5E574F]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                <span>Veg</span>
              </button>
            </div>

            <div className="relative flex-1 md:w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FDFBF7] border border-gray-200 text-xs text-[#2D2926] pl-8 pr-3 py-1.5 rounded-full placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#EAE7E1] hover:border-[#C5A059] rounded-xs p-6 transition duration-300 shadow-xs flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                {/* Top Badge & Veg/Non-Veg */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-block w-3.5 h-3.5 border p-0.5 rounded-xs ${
                        item.type === 'veg' ? 'border-emerald-600' : 'border-red-600'
                      }`}
                    >
                      <span
                        className={`block w-full h-full rounded-full ${
                          item.type === 'veg' ? 'bg-emerald-600' : 'bg-red-600'
                        }`}
                      ></span>
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C7368]">
                      {item.category.replace('_', ' ')}
                    </span>
                  </div>

                  {item.isChefSpecial && (
                    <span className="bg-[#C5A059]/10 border border-[#C5A059] text-[#2D2926] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 fill-[#C5A059] text-[#C5A059]" />
                      <span>Signature</span>
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="serif text-lg font-bold text-[#2D2926] group-hover:text-[#C5A059] transition">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5E574F] mt-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-50 text-[#7C7368] text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#book-meeting"
                  className="text-[11px] text-[#2D2926] hover:text-[#C5A059] font-bold uppercase tracking-wider flex items-center space-x-1 transition"
                >
                  <span>Select</span>
                  <Check className="w-3 h-3 text-[#C5A059]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Customization Notice */}
        <div className="mt-14 text-center bg-white border border-[#EAE7E1] rounded-xs p-8 max-w-4xl mx-auto shadow-xs">
          <h4 className="serif text-xl font-light text-[#2D2926] mb-1">
            Need a Bespoke Multi-Course Menu or Food Tasting?
          </h4>
          <p className="text-xs sm:text-sm text-[#5E574F] max-w-2xl mx-auto mb-6">
            We tailor custom banquet menus to suit your family traditions (Bengali, Mughlai, Marwari, Continental) with live tasting sessions in Kolkata.
          </p>
          <div className="flex justify-center">
            <a
              href="#book-meeting"
              className="bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition shadow-xs"
            >
              Book Menu Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
