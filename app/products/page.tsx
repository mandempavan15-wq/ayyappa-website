"use client";

import React, { useState } from "react";
import { products } from "../../lib/products";
import { MessageCircle, Search } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", ...products.map(p => p.category)];

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-deep-navy uppercase tracking-tight mb-6">
            EVERYTHING <br className="md:hidden" />WE <span className="text-brand-red">STOCK</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl">
            All available at our Begumpet studio. Walk in and our team will help you find the perfect fit for your car.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 sticky top-[80px] bg-white/95 backdrop-blur-md py-4 z-20">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full ${activeCategory === cat ? 'bg-deep-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col gap-20">
          {products.map((section) => {
            if (activeCategory !== "ALL" && activeCategory !== section.category) return null;
            
            const filteredItems = section.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
            
            if (filteredItems.length === 0) return null;

            return (
              <div key={section.category}>
                <div className="flex items-end justify-between border-b-2 border-gray-100 pb-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-deep-navy uppercase">{section.category}</h2>
                  <span className="text-brand-red font-bold text-sm">{filteredItems.length} Items</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, idx) => (
                    <div key={idx} className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-red/30 p-6 rounded-2xl transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
                      <h3 className="text-lg font-bold text-deep-navy leading-snug mb-8">{item}</h3>
                      <a 
                        href={`https://wa.me/919700314415?text=Hi%20Ayyappa%20Car%20Accessories%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(item)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-brand-red flex items-center gap-2 transition-colors"
                      >
                        <MessageCircle size={16} />
                        Enquire
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
