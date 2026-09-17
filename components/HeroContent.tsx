import React from "react";
import { ShieldCheck, Settings, ShieldAlert, Award, ArrowRight } from "lucide-react";

export default function HeroContent({ scrollProgress }: { scrollProgress: number }) {
  // Logic: 0 to 0.1 is fully visible. 0.1 to 0.35 fades out.
  // Transform moves it up slightly.
  let opacity = 1;
  if (scrollProgress > 0.1) {
    opacity = Math.max(0, 1 - (scrollProgress - 0.1) * 4);
  }

  const translateY = scrollProgress * -100;

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4 md:px-12 flex h-full items-center z-20"
      style={{ 
        opacity, 
        transform: `translateY(${translateY}px)`,
        pointerEvents: opacity > 0.1 ? 'auto' : 'none'
      }}
    >
      {/* Background shape mimicking the diagonal white background from the reference */}
      <div className="absolute top-0 left-0 w-full md:w-[65%] h-[150vh] -mt-[25vh] bg-white/95 backdrop-blur-sm z-[-1] hidden md:block" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}></div>
      <div className="absolute top-0 left-0 w-full h-[150vh] -mt-[25vh] bg-white/90 backdrop-blur-sm z-[-1] block md:hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

      <div className="max-w-2xl pt-10 pb-24 md:py-0">
        <div className="flex items-center gap-2 text-brand-red font-bold text-xs md:text-sm tracking-[0.2em] italic mb-6">
          <span>{"////"}</span>
          <span>DRIVE SAFE. DRIVE HAPPY.</span>
          <span>{"////"}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-deep-navy leading-[1.05] uppercase mb-6 tracking-tight">
          Drive Your Car<br />
          With <span className="text-brand-red">Passion</span><br />
          And Style.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 max-w-lg leading-relaxed">
          Premium Car Accessories to Enhance Comfort, Safety & Style. Because Your Car Deserves the Best.
        </p>

        <div className="flex flex-wrap gap-6 md:gap-10 mb-12">
          <Feature icon={<ShieldCheck size={28} />} text="PREMIUM QUALITY" />
          <Feature icon={<Settings size={28} />} text="PERFECT FIT" />
          <Feature icon={<ShieldAlert size={28} />} text="ENHANCED SAFETY" />
          <Feature icon={<Award size={28} />} text="TRUSTED SERVICE" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a 
            href="https://wa.me/919700314415?text=Hi%20Ayyappa%20Car%20Accessories%2C%20I%27d%20like%20to%20enquire%20about%20car%20accessories."
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-black tracking-wider transition-all duration-300"
          >
            SHOP NOW
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="tel:+919700314415"
            className="text-deep-navy hover:text-brand-red font-bold px-6 py-4 transition-colors uppercase tracking-wider text-sm"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center max-w-[80px]">
      <div className="text-brand-red">
        {icon}
      </div>
      <span className="text-[10px] md:text-xs font-black text-deep-navy uppercase leading-tight">
        {text}
      </span>
    </div>
  );
}
