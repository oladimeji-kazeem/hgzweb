
import React from 'react';
import { CHURCH_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,51,153,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1544427928-c49dd24428c8?auto=format&fit=crop&q=80&w=800" 
                alt="Community Worship" 
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/40 to-transparent"></div>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFD700] rounded-full z-0 opacity-40 blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-[#CC0000]/10 rounded-full z-0"></div>
            
            <div className="absolute bottom-10 right-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-[#CC0000] animate-bounce">
              <p className="text-[#003399] font-black text-4xl mb-1">15+</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Years of Impact</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 bg-[#003399]/5 rounded-full border border-[#003399]/10">
              <span className="text-[#003399] font-black text-xs uppercase tracking-[0.3em]">Our Identity & Mandate</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-[#003399] leading-none tracking-tighter">
              Where Heaven <br/><span className="text-[#CC0000]">Touches Earth</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              We are a parish of The Redeemed Christian Church of God (RCCG), focused on building a community of believers that manifest the glory of God. Our mandate is simple yet profound: <span className="text-[#CC0000] font-bold">To raise a people of excellence.</span>
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] hover:shadow-xl transition-all border-l-8 border-[#003399]">
                <div className="text-4xl text-[#003399]"><i className="fas fa-eye"></i></div>
                <div>
                  <h4 className="font-black text-2xl text-[#003399] mb-2 uppercase tracking-tight">Our Vision</h4>
                  <p className="text-slate-500 leading-relaxed">To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] hover:shadow-xl transition-all border-l-8 border-[#CC0000]">
                <div className="text-4xl text-[#CC0000]"><i className="fas fa-bullseye"></i></div>
                <div>
                  <h4 className="font-black text-2xl text-[#CC0000] mb-2 uppercase tracking-tight">Our Mission</h4>
                  <p className="text-slate-500 leading-relaxed">To reach out to the world through the preaching of the gospel of Jesus Christ, holiness and planting of churches.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-6 items-center">
              <button className="bg-[#003399] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#CC0000] transition-all flex items-center gap-3 group shadow-2xl shadow-blue-200">
                Join our Family
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </button>
              <a href="#services" className="text-[#003399] font-black underline underline-offset-8 hover:text-[#CC0000] transition-colors">Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
