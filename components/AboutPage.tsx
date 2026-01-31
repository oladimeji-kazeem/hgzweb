
import React from 'react';
import { CHURCH_INFO, BELIEFS, MINISTRIES } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="relative py-32 bg-[#003399] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1544427928-c49dd24428c8?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">OUR <span className="text-[#FFD700]">STORY</span></h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the heart behind Holy Ghost Zone – our mandate, our journey, and the family we've built through Christ's love.
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Mission & Vision Detailed */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-block px-4 py-1 bg-[#CC0000]/10 text-[#CC0000] rounded-full text-xs font-black uppercase tracking-widest">Our Mandate</div>
              <h2 className="text-4xl md:text-6xl font-black text-[#003399] leading-none">Anointed to <br/><span className="text-[#CC0000]">Manifest Excellence</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                RCCG Holy Ghost Zone was birthed with a specific heavenly assignment: to create an atmosphere where the raw power of the Holy Spirit transforms ordinary men into spiritual giants. We believe every individual has a divine deposit that must be manifested for the world to see.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border-t-4 border-[#003399] shadow-sm">
                  <h4 className="text-2xl font-black text-[#003399] mb-4">Vision</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border-t-4 border-[#CC0000] shadow-sm">
                  <h4 className="text-2xl font-black text-[#CC0000] mb-4">Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">To reach out to the world through the preaching of the gospel of Jesus Christ, holiness and planting of churches.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800" 
                alt="Worship" 
                className="rounded-[4rem] shadow-2xl relative z-10 w-full h-[600px] object-cover"
              />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFD700] rounded-full -z-10 blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Pastor Section */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-2/5">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#CC0000] rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544427928-c49dd24428c8?auto=format&fit=crop&q=80&w=800" 
                  alt="Pastor-in-Charge" 
                  className="rounded-[3rem] w-full h-[500px] object-cover border-4 border-white"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 space-y-6">
              <h3 className="text-[#FFD700] font-black tracking-widest uppercase text-sm">Spiritual Leadership</h3>
              <h2 className="text-4xl md:text-6xl font-black leading-none">Meet Our <br/><span className="text-[#CC0000]">Pastor-in-Charge</span></h2>
              <div className="w-20 h-1 bg-[#CC0000] rounded-full"></div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Under the visionary leadership of our Pastor-in-Charge, RCCG HGZ has grown into a spiritual oasis for many. With a profound grace for teaching the Word and a passion for soul-winning, the leadership is dedicated to seeing every member fulfill their destiny.
              </p>
              <p className="text-slate-400 italic">
                "We don't just build a church; we build people. At Holy Ghost Zone, your growth is our priority."
              </p>
              <div className="pt-4 flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Beliefs Detailed */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#003399]">Our Statement of <span className="text-[#CC0000]">Faith</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Rooted in the eternal truth of the Holy Scriptures, we stand firm on these pillars.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BELIEFS.map((belief, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 text-left group">
                <div className="w-12 h-12 bg-[#003399]/5 rounded-xl flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
                   <span className="font-black">0{idx + 1}</span>
                </div>
                <h4 className="text-xl font-black text-[#003399] mb-4 uppercase tracking-tight">{belief.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{belief.content}</p>
              </div>
            ))}
            <div className="bg-[#CC0000] p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center">
              <h4 className="text-2xl font-black mb-4">Want to learn more?</h4>
              <p className="text-red-100 text-sm mb-8 leading-relaxed">Join our "Believers Class" every Sunday morning to dive deeper into our theological foundation.</p>
              <button className="bg-white text-[#CC0000] px-6 py-3 rounded-xl font-black hover:bg-[#FFD700] hover:text-[#003399] transition-all">Sign Up Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#003399] mb-8">Ready to <span className="text-[#CC0000]">Begin Your Journey?</span></h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto mb-12">Whether you're visiting for a day or looking for a permanent home, there's a seat waiting for you at the table.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#contact-page" className="bg-[#CC0000] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl">Plan Your Visit</a>
            <a href="#give" className="bg-white border-2 border-[#003399] text-[#003399] px-12 py-5 rounded-full font-black text-xl hover:bg-[#003399] hover:text-white transition-all shadow-xl">Support the Work</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
