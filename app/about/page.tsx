import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ayyappa Car Accessories",
  description: "Learn about Ayyappa Car Accessories, your premium car accessories and styling studio in Hyderabad.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="mb-8">
          <span className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase">About Ayyappa</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-deep-navy uppercase leading-tight mb-16 tracking-tight">
          YOUR CAR.<br />
          YOUR STYLE.<br />
          <span className="text-brand-red">OUR EXPERTISE.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-black uppercase mb-6 text-deep-navy">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We are a premium car accessories and styling studio located in the heart of Secunderabad, Hyderabad. 
              With a passion for automotive perfection, we provide tailored upgrades for every vehicle that drives into our studio.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase mb-6 text-deep-navy">What We Do</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              From luxury interiors and precision alloy wheels to advanced electronics, lighting, and 
              high-end paint protection, we transform factory-standard cars into personalized masterpieces.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase mb-6 text-deep-navy">Why Customers Choose Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We don&apos;t compromise on quality. Our customers trust us because we stock only reputable brands, 
              provide transparent pricing, and ensure every product is fitted with meticulous care.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase mb-6 text-deep-navy">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Honest advice. Premium products. Flawless execution. We treat every car as if it were our own, 
              ensuring you drive away safe, happy, and in style.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-deep-navy text-white rounded-3xl p-12 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl md:text-6xl font-black text-brand-red mb-2">110+</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Product Options</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-brand-red mb-2">6</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Product Categories</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-brand-red mb-2">100%</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Professional Fitment</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-brand-red mb-2">Top</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Premium Brands</div>
          </div>
        </div>

      </div>
    </main>
  );
}
