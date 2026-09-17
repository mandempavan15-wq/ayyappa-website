import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex flex-col mb-4">
            <span className="text-3xl font-black italic uppercase tracking-tighter" style={{ textShadow: '2px 2px 0px #E30613' }}>
              Ayyappa
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Car Accessories
            </span>
          </div>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            Drive Safe. Drive Happy.
          </p>
          <a href="https://instagram.com/ayyapacaraccessories" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>

        <div>
          <h4 className="font-black tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-300">
            <li><Link href="/" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-red transition-colors">About</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Products</Link></li>
            <li><Link href="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
            <li><Link href="/work" className="hover:text-brand-red transition-colors">Latest Work</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black tracking-widest uppercase mb-6 text-sm">Categories</h4>
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-300">
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Interiors</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Exterior & Styling</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Electronics</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Lighting</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">PPF & Protection</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Coating & Care</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black tracking-widest uppercase mb-6 text-sm">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-300">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand-red flex-shrink-0" />
              <a href="tel:+919700314415" className="hover:text-brand-red transition-colors">+91 9700314415</a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="text-brand-red flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <a href="https://instagram.com/ayyapacaraccessories" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">@ayyapacaraccessories</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand-red flex-shrink-0" />
              <a href="mailto:ayyapacaraccessories@gmail.com" className="hover:text-brand-red transition-colors">ayyapacaraccessories@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-red flex-shrink-0 mt-1" />
              <a href="https://maps.app.goo.gl/dYoCD4xXcpAHbNxC6" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">
                <address className="not-italic leading-relaxed">
                  1-8-32/66A, Minister Rd,<br/>
                  Ramgopalpet, Secunderabad,<br/>
                  Hyderabad, Telangana 500003
                </address>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} Ayyappa Car Accessories.</p>
        <p className="mt-4 md:mt-0">Premium Automotive Styling</p>
      </div>
    </footer>
  );
}
