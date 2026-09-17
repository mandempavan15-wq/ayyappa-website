import React from "react";
import { Armchair, CircleDashed, Speaker, Lightbulb, Car, Settings2 } from "lucide-react";

export default function CategoryBar() {
  return (
    <div className="w-full bg-deep-navy border-b-4 border-brand-red px-4 md:px-12 py-4 md:py-6 overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-between min-w-[800px] max-w-7xl mx-auto gap-4 md:gap-8">
        
        <Category 
          icon={<Armchair size={28} />} 
          title="INTERIORS" 
          subtitle="Comfort & Style" 
        />
        <div className="h-10 w-px bg-white/20"></div>
        
        <Category 
          icon={<CircleDashed size={28} />} 
          title="ALLOY WHEELS" 
          subtitle="Performance Looks" 
        />
        <div className="h-10 w-px bg-white/20"></div>
        
        <Category 
          icon={<Speaker size={28} />} 
          title="AUDIO SYSTEMS" 
          subtitle="Sound That Drives" 
        />
        <div className="h-10 w-px bg-white/20"></div>
        
        <Category 
          icon={<Lightbulb size={28} />} 
          title="LIGHTING" 
          subtitle="Bright, Safe, Stylish" 
        />
        <div className="h-10 w-px bg-white/20"></div>
        
        <Category 
          icon={<Car size={28} />} 
          title="CAR CARE" 
          subtitle="Protect & Shine" 
        />
        <div className="h-10 w-px bg-white/20"></div>
        
        <Category 
          icon={<Settings2 size={28} />} 
          title="ACCESSORIES" 
          subtitle="Upgrade Your Drive" 
        />

      </div>
    </div>
  );
}

function Category({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
      <div className="text-white group-hover:text-brand-red transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-black text-[11px] md:text-sm uppercase tracking-wider">
          {title}
        </span>
        <span className="text-gray-400 text-[9px] md:text-xs">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
