
import React from 'react';
import { CHURCH_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with higher contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544427928-c49dd24428c8?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover"
          alt="Church Worship"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003399]/90 via-[#003399]/70 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 bg-[#FFD700] text-[#003399] px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-[0.2em] shadow-lg animate-pulse">
            <i className="fas fa-star"></i> {CHURCH_INFO.themeYear}
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black mb-6 leading-none text-shadow tracking-tighter">
            RAISING <br/><span className="text-[#CC0000]">GIANTS</span>
          </h1>
          
          <div className="h-1 w-32 bg-[#CC0000] mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-3xl mb-12 text-[#FFD700] font-bold italic tracking-wide">
            {CHURCH_INFO.themeMonth}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-[#CC0000] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 hover:scale-110 transition-all shadow-[0_20px_50px_rgba(204,0,0,0.3)] flex items-center justify-center gap-3">
              I'm New Here
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#003399] transition-all shadow-xl flex items-center justify-center gap-3">
              <i className="fas fa-play-circle text-2xl"></i> Join Service
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">Step Into Your Destiny</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
