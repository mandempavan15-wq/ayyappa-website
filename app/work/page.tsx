import React from "react";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Work | Ayyappa Car Accessories",
  description: "View our latest premium car accessory installations and detailing work in Hyderabad.",
};

export default function WorkPage() {
  const works = [
    { id: 1, title: "Premium Interior Customisation", img: "/frames/frame_0050.jpg" },
    { id: 2, title: "Exterior Styling & Alloys", img: "/frames/frame_0100.jpg" },
    { id: 3, title: "High-End Audio Installation", img: "/frames/frame_0150.jpg" },
    { id: 4, title: "Ceramic Coating Finish", img: "/frames/frame_0200.jpg" },
    { id: 5, title: "Custom Ambient Lighting", img: "/frames/frame_0250.jpg" },
    { id: 6, title: "Full PPF Protection", img: "/frames/frame_0300.jpg" },
  ];

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-deep-navy uppercase tracking-tight mb-4 leading-none">
              OUR LATEST<br />
              <span className="text-brand-red">WORK</span>
            </h1>
            <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">
              Cars. Details. Results.
            </p>
          </div>
          
          <a 
            href="https://instagram.com/ayyapacaraccessories" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 bg-gray-50 hover:bg-gray-100 px-6 py-4 rounded-xl transition-colors border border-gray-200"
          >
            <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Follow our work</span>
              <span className="text-sm font-black text-deep-navy group-hover:text-brand-red transition-colors">@ayyapacaraccessories</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <a 
              key={work.id}
              href="https://instagram.com/ayyapacaraccessories"
              target="_blank"
              rel="noreferrer" 
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 block"
            >
              {/* Fallback styling in case images aren't found/loaded yet */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${work.img})` }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-white/80 font-black text-2xl tracking-tighter italic">
                    {String(work.id).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-black text-xl md:text-2xl uppercase leading-tight">
                    {work.title}
                  </h3>
                  <span className="text-brand-red text-xs font-bold tracking-widest uppercase mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View on Instagram
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
