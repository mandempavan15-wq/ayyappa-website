"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const btn = document.getElementById('mobile-menu-btn');
    if (btn) {
      btn.onclick = () => setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-deep-navy text-white flex flex-col pt-6 px-6">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col group">
          <span className="text-2xl font-black italic uppercase tracking-tighter" style={{ textShadow: '2px 2px 0px #E30613' }}>
            Ayyappa
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
            Car Accessories
          </span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-red">
          <X size={32} />
        </button>
      </div>

      <nav className="flex flex-col gap-8 text-2xl font-black uppercase tracking-tight">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/services">Services</Link>
        <Link href="/work">Latest Work</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="mt-auto pb-12">
        <a 
          href="https://wa.me/919700314415"
          target="_blank" 
          rel="noreferrer"
          className="w-full block text-center bg-brand-red text-white py-4 font-black tracking-widest uppercase"
        >
          GET A QUOTE
        </a>
      </div>
    </div>
  );
}
