import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingProps {
  onNavigate: (page: 'landing' | 'summa' | 'dispenser') => void;
}

export function Landing({ onNavigate }: LandingProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      {/* ULTIMA Logo */}
      <div className="mb-12">
        <div className="w-32 h-32 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#EEFF00] font-bold text-2xl tracking-wider">ULTIMA</div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full max-w-6xl h-1 bg-black mb-12"></div>

      {/* Product Boxes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {/* SUMMA Box */}
        <div className="border-4 border-black p-8 bg-white hover:shadow-lg transition-shadow cursor-pointer"
             onClick={() => onNavigate('summa')}>
          <h2 className="text-2xl font-bold text-black mb-8">SUMMA</h2>
          
          <div className="mb-8 h-64 flex items-center justify-center bg-gray-100 relative">
            <div className="text-center">
              <div className="inline-block mb-4">
                {/* Padel Racket SVG */}
                <svg width="120" height="160" viewBox="0 0 120 160" className="mx-auto mb-4">
                  <g stroke="black" strokeWidth="2" fill="none">
                    {/* Handle */}
                    <rect x="50" y="100" width="20" height="60" rx="10"/>
                    {/* Head */}
                    <circle cx="60" cy="70" r="40"/>
                    {/* String pattern */}
                    <line x1="25" y1="60" x2="95" y2="60"/>
                    <line x1="20" y1="70" x2="100" y2="70"/>
                    <line x1="18" y1="80" x2="102" y2="80"/>
                    <line x1="20" y1="90" x2="100" y2="90"/>
                    <line x1="30" y1="100" x2="90" y2="100"/>
                    <line x1="60" y1="30" x2="60" y2="110"/>
                    <line x1="50" y1="40" x2="70" y2="100"/>
                    <line x1="70" y1="40" x2="50" y2="100"/>
                  </g>
                </svg>
              </div>
              {/* Padel Ball */}
              <div className="w-24 h-24 rounded-full bg-[#EEFF00] mx-auto"></div>
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('summa');
            }}
            className="flex items-center gap-2 text-black font-bold text-lg hover:gap-4 transition-all">
            view product
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* ALMUS Box */}
        <div className="border-4 border-black p-8 bg-white hover:shadow-lg transition-shadow cursor-pointer"
             onClick={() => onNavigate('dispenser')}>
          <h2 className="text-2xl font-bold text-black mb-8">ALMUS</h2>
          
          <div className="mb-8 h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-400">
              Smart Dispenser Image
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('dispenser');
            }}
            className="flex items-center gap-2 text-black font-bold text-lg hover:gap-4 transition-all">
            view product
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
