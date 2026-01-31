
import React from 'react';
import { SERVICE_TIMES, CHURCH_INFO } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white animate-in fade-in duration-700">
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .card-flip:hover .card-inner {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-[#003399] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1510563339316-43b9c025078a?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#003399]/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="inline-block px-4 py-1 mb-6 border border-[#FFD700] rounded-full text-[#FFD700] text-xs font-black uppercase tracking-[0.3em] animate-pulse">
            Your Spiritual Home
          </div>
          <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-none">
            EXPERIENCE <br/><span className="text-[#CC0000]">THE POWER</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Join us at RCCG Holy Ghost Zone for life-transforming encounters with the Word and the Spirit.
          </p>
          <div className="flex justify-center">
            <div className="w-1 h-24 bg-gradient-to-b from-[#FFD700] to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Interactive Schedule - Flip Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-[#CC0000] font-black text-sm uppercase tracking-[0.4em] mb-4">Our Weekly Meetings</h3>
            <h2 className="text-4xl md:text-6xl font-black text-[#003399]">The <span className="text-[#CC0000]">Schedule</span></h2>
            <p className="text-slate-500 mt-4">Hover or tap on a card to see service details and times.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICE_TIMES.map((service, idx) => (
              <div key={idx} className="perspective-1000 h-[450px] w-full group card-flip cursor-pointer">
                <div className="relative w-full h-full duration-700 preserve-3d card-inner transition-transform shadow-2xl rounded-[3rem]">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border-2 border-slate-100 group-hover:border-[#003399]/20">
                    <div className="w-24 h-24 bg-[#003399] text-[#FFD700] rounded-3xl flex items-center justify-center text-5xl mb-10 shadow-xl shadow-blue-200">
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <span className="text-[#CC0000] font-black text-sm uppercase tracking-[0.4em] mb-4">{service.day}</span>
                    <h3 className="text-3xl font-black text-[#003399] leading-tight">{service.title}</h3>
                    <div className="mt-8 flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-widest">
                      <span>View Details</span>
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </div>
                  </div>

                  {/* Back Side (Rotated) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#003399] text-white rounded-[3rem] p-12 flex flex-col justify-between border-2 border-white/10">
                    <div>
                      <h4 className="text-[#FFD700] font-black text-xs uppercase tracking-[0.3em] mb-4">{service.day} Worship</h4>
                      <h3 className="text-3xl font-black mb-6 leading-tight">{service.title}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed mb-8">{service.description}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white/10 p-5 rounded-2xl flex items-center gap-4 border border-white/10">
                        <div className="w-12 h-12 bg-[#CC0000] rounded-xl flex items-center justify-center text-xl shadow-lg shrink-0">
                          <i className="far fa-clock"></i>
                        </div>
                        <div>
                          <p className="text-[10px] text-blue-200 font-black uppercase tracking-widest">Starts at</p>
                          <p className="text-xl font-black">{service.time}</p>
                        </div>
                      </div>
                      <button className="w-full bg-[#FFD700] text-[#003399] py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-xl">
                        Plan My Visit
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect - Dynamic Tiles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-[#CC0000] font-black text-sm uppercase tracking-[0.4em]">Prepare Your Heart</h3>
              <h2 className="text-4xl md:text-6xl font-black text-[#003399]">What to <span className="text-[#CC0000]">Expect</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We believe that every Sunday is an opportunity for a divine reset. Here is a glimpse into the HGZ atmosphere.
              </p>
              <div className="flex gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center font-black text-[#003399] text-xs">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-400 self-center">Join 500+ regular worshippers</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="w-12 h-12 bg-[#003399] text-white rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-microphone"></i></div>
                  <h4 className="text-xl font-black text-[#003399] mb-3">Spirit-Led Worship</h4>
                  <p className="text-sm text-slate-500">Unrestricted praise that welcomes the tangible presence of God.</p>
                </div>
                <div className="bg-[#CC0000] p-8 rounded-[2.5rem] text-white hover:shadow-2xl transition-all group lg:mt-8">
                  <div className="w-12 h-12 bg-white text-[#CC0000] rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-bolt"></i></div>
                  <h4 className="text-xl font-black mb-3">Divine Encounter</h4>
                  <p className="text-red-100 text-sm">Prayer sessions aimed at spiritual breakthrough and deliverance.</p>
                </div>
              </div>
              <div className="space-y-6 sm:mt-12">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white hover:shadow-2xl transition-all group">
                  <div className="w-12 h-12 bg-[#FFD700] text-[#003399] rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-scroll"></i></div>
                  <h4 className="text-xl font-black mb-3">Solid Word</h4>
                  <p className="text-slate-400 text-sm">Biblical teachings that are both deep and practical for daily living.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="w-12 h-12 bg-[#003399]/10 text-[#003399] rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform"><i className="fas fa-heart"></i></div>
                  <h4 className="text-xl font-black text-[#003399] mb-3">Royal Hospitality</h4>
                  <p className="text-sm text-slate-500">A family that truly loves and cares for every member and guest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#CC0000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-black text-[#003399] mb-12">Finding <br/><span className="text-[#CC0000]">The Zone</span></h2>
              
              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#CC0000] text-white rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg"><i className="fas fa-location-dot"></i></div>
                  <div>
                    <h4 className="font-black text-[#003399] text-xl mb-2">Our Sanctuary</h4>
                    <p className="text-slate-500 leading-relaxed">{CHURCH_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#003399] text-white rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg"><i className="fas fa-van-shuttle"></i></div>
                  <div>
                    <h4 className="font-black text-[#003399] text-xl mb-2">Transportation</h4>
                    <p className="text-slate-500 leading-relaxed">Free bus shuttles run from Cele, Ijede, and Sabo bus stops 30 minutes before every service.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#003399] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#CC0000] transition-all shadow-xl flex items-center justify-center gap-3">
                  <i className="fas fa-map"></i> Open in Maps
                </button>
                <button className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-black hover:bg-slate-50 transition-all">
                  Request Pickup
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 h-[400px] lg:h-auto bg-slate-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348602747!2d3.472535!3d6.537233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf65709772c3d%3A0xa19f564344841961!2sIkorodu!5e0!3m2!1sen!2sng!4v1625585521000!5m2!1sen!2sng" 
                className="w-full h-full border-0 grayscale" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Online Catch-all */}
      <section className="py-24 text-center bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-[#CC0000] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Unable to <span className="text-[#FFD700]">Visit?</span></h2>
              <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Geography shouldn't limit your growth. Our high-definition livestream and virtual community are waiting for you.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-[#CC0000] px-12 py-5 rounded-full font-black text-xl hover:bg-[#FFD700] hover:text-[#003399] transition-all shadow-xl">
                  Watch Online
                </button>
                <button className="bg-[#003399] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-slate-900 transition-all shadow-xl">
                  Join Zoom Sanctuary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
