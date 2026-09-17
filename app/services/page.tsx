import React from "react";
import { services } from "../../lib/services";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Ayyappa Car Accessories",
  description: "Honest starting prices for ceramic coating, android head units, seat covers and window films.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-deep-navy uppercase tracking-tight mb-6">
            SERVICE <span className="text-brand-red">PRICE RANGES</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Honest starting prices — no hidden charges. Final price depends on your car model and selected products. Walk in for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-deep-navy uppercase">{service.title}</h2>
                <div className="bg-deep-navy text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                  {service.price}
                </div>
              </div>
              
              <p className="text-gray-600 font-medium mb-8 text-lg">{service.description}</p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-deep-navy font-bold">
                    <CheckCircle2 className="text-brand-red flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100 mt-auto">
                <span className="text-xs text-gray-400 font-bold tracking-widest uppercase text-center sm:text-left">{service.note}</span>
                <a 
                  href={`https://wa.me/919700314415?text=Hi%20Ayyappa%20Car%20Accessories%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-4 font-black tracking-wider uppercase transition-colors rounded-lg"
                >
                  GET A QUOTE
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
