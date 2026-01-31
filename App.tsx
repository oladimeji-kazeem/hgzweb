
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sermons from './components/Sermons';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import SermonArchive from './components/SermonArchive';
import GivingPage from './components/GivingPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import { MINISTRIES, BELIEFS } from './constants';

type View = 'home' | 'about' | 'services' | 'sermons' | 'give' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#about-page') setView('about');
      else if (hash === '#services-page') setView('services');
      else if (hash === '#sermons-page') setView('sermons');
      else if (hash === '#give-page') setView('give');
      else if (hash === '#contact-page') setView('contact');
      else setView('home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderView = () => {
    switch(view) {
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'sermons': return <SermonArchive />;
      case 'give': return <GivingPage />;
      case 'contact': return <ContactPage />;
      default: return (
        <>
          <Hero />
          
          <About />
          
          {/* Statement of Faith Summary */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-[#CC0000] font-black tracking-widest uppercase mb-4 text-sm">Our Foundation</h3>
              <h2 className="text-4xl md:text-5xl font-black text-[#003399] mb-16">What We <span className="text-[#CC0000]">Believe</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {BELIEFS.map((belief, idx) => (
                  <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 hover:bg-[#003399] hover:text-white transition-all duration-500 group shadow-sm border border-slate-100">
                    <h4 className="text-xl font-bold mb-4 text-[#003399] group-hover:text-[#FFD700]">{belief.title}</h4>
                    <p className="text-slate-600 group-hover:text-blue-100 text-sm leading-relaxed">{belief.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a href="#about-page" className="text-[#003399] font-black underline underline-offset-8 hover:text-[#CC0000] transition-colors uppercase text-sm tracking-widest">Read Our Full Statement of Faith</a>
              </div>
            </div>
          </section>

          <Services />

          {/* Ministries Highlight */}
          <section className="py-24 bg-[#0F172A] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC0000]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
             <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                    <h3 className="text-[#FFD700] font-black tracking-widest uppercase mb-4 text-sm">Empowerment</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-white">Our <span className="text-[#CC0000]">Ministries</span></h2>
                  </div>
                  <p className="text-slate-400 max-w-md text-right hidden md:block">There's a place for everyone in the HGZ family. Discover where you fit and start growing.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {MINISTRIES.map((m, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white hover:text-[#003399] transition-all duration-500 group cursor-pointer">
                      <div className="w-16 h-16 bg-[#CC0000] text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#003399] shadow-xl">
                        <i className={`fas ${m.icon}`}></i>
                      </div>
                      <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-[#003399]">{m.name}</h4>
                      <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>
          
          {/* Livestream Engagement */}
          <section className="py-24 bg-[#003399] relative overflow-hidden text-center text-white">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Join Us <span className="text-[#FFD700]">LIVE</span> Online</h2>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto font-light">
                Experience the raw power of the Holy Ghost from anywhere in the world. Our digital doors are always open.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-[#CC0000] px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-4 shadow-2xl">
                  <i className="fab fa-youtube text-3xl"></i> Watch Now
                </button>
                <button className="bg-[#1877F2] px-12 py-5 rounded-full font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 shadow-2xl">
                  <i className="fab fa-facebook text-3xl"></i> Facebook Stream
                </button>
              </div>
            </div>
          </section>

          <Sermons />
          
          {/* Testimony Summary */}
          <section className="py-24 bg-slate-50 border-y border-slate-100">
             <div className="container mx-auto px-4 md:px-8 text-center">
               <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl relative">
                  <div className="w-20 h-20 bg-[#FFD700] rounded-full absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center text-[#003399] text-3xl shadow-xl">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[#CC0000] font-black text-xs uppercase tracking-[0.3em] mb-10">Divine Testimony</h3>
                    <p className="text-2xl md:text-4xl text-[#003399] font-bold italic leading-tight mb-12">
                      "I walked into Holy Ghost Zone lost and burdened, but through the teachings and the love of this family, my life has been restored. God is truly here!"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center text-[#003399] font-black border-4 border-[#FFD700]">BA</div>
                      <h5 className="font-black text-xl text-slate-800">Sister Blessing A.</h5>
                      <p className="text-xs text-[#CC0000] font-bold uppercase tracking-widest mt-1">Life Transformed Since 2021</p>
                    </div>
                  </div>
               </div>
             </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderView()}
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;
