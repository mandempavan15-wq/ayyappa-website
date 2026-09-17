import React from "react";

export default function LoadingScreen({ count, total }: { count: number; total: number }) {
  const percentage = Math.min(100, Math.round((count / total) * 100));

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="text-deep-navy text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-2">
          Ayyappa
        </h1>
        <h2 className="text-sm md:text-lg font-bold tracking-widest text-brand-red uppercase">
          Car Accessories
        </h2>
      </div>
      
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-brand-red transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="text-sm font-bold text-gray-500">
        {percentage}%
      </div>
    </div>
  );
}
