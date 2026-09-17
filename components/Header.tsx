"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : isHome ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      {/* Top utility bar */}
      <div className={`w-full px-4 md:px-12 py-2 flex justify-between items-center text-[10px] md:text-xs font-bold border-b transition-colors duration-300 ${scrolled || !isHome ? 'border-gray-100 text-deep-navy bg-white' : 'border-white/10 text-white bg-deep-navy'}`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Ph</span>
            <a href="tel:+919700314415" className="text-brand-red">
              9700314415
            </a>
          </div>
          <span className="opacity-20 hidden md:inline">|</span>
          <div className="hidden lg:flex items-center gap-1 truncate font-normal">
            <MapPin size={12} className="text-brand-red shrink-0" />
            <a href="https://maps.app.goo.gl/dYoCD4xXcpAHbNxC6" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors truncate">
              1-8-32/66A, Minister Rd, Ramgopalpet, Secunderabad, Hyderabad, Telangana 500003
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/ayyapacaraccessories" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors flex items-center gap-1">
            Instagram
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`w-full px-4 md:px-12 py-4 flex justify-between items-center transition-colors duration-300 ${scrolled || !isHome ? 'text-deep-navy' : 'text-white bg-deep-navy'}`}>
        <Link href="/" className="flex flex-col group">
          <span className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter drop-shadow-md" style={{ textShadow: '2px 2px 0px #E30613' }}>
            Ayyappa
          </span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-brand-red transition-colors">
            Car Accessories
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider">
          <Link href="/" className="hover:text-brand-red transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-brand-red transition-colors">ABOUT US</Link>
          <Link href="/products" className="hover:text-brand-red transition-colors">PRODUCTS</Link>
          <Link href="/services" className="hover:text-brand-red transition-colors">SERVICES</Link>
          <Link href="/work" className="hover:text-brand-red transition-colors">LATEST WORK</Link>
          <Link href="/contact" className="hover:text-brand-red transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden lg:block">
          <a 
            href="https://wa.me/919700314415?text=Hi%20Ayyappa%20Car%20Accessories%2C%20I%27d%20like%20to%20get%20a%20quote."
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 text-xs font-bold tracking-wider transition-transform duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            GET A QUOTE
          </a>
        </div>
        
        {/* Mobile menu trigger could go here, handled by MobileMenu component */}
        <button id="mobile-menu-btn" className="lg:hidden text-brand-red">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
