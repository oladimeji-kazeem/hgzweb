
import React from 'react';
import { CHURCH_INFO } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook-f', url: 'https://facebook.com/rccghgz' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/rccghgz' },
    { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/rccghgz' },
    { name: 'Twitter', icon: 'x-twitter', url: 'https://twitter.com/rccghgz' },
  ];

  return (
    <footer id="footer" className="bg-[#0F172A] text-white pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#003399] font-black text-xl border-4 border-[#003399]">
                HGZ
              </div>
              <h1 className="font-black text-xl leading-none tracking-tighter">
                RCCG <br/><span className="text-[#CC0000]">HOLY GHOST ZONE</span>
              </h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
              Building a people of excellence and power. We are a family rooted in the undiluted word of God and reaching out to our community with the love of Christ.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#CC0000] hover:-translate-y-1 transition-all group"
                  title={social.name}
                >
                  <i className={`fab fa-${social.icon} group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-[#FFD700] uppercase tracking-widest text-sm text-shadow">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-[#CC0000] rounded-full"></div> Home</a></li>
              <li><a href="#about-page" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-[#CC0000] rounded-full"></div> Our Story</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-[#CC0000] rounded-full"></div> Services</a></li>
              <li><a href="#sermons" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-[#CC0000] rounded-full"></div> Sermons</a></li>
              <li><a href="#give" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-[#CC0000] rounded-full"></div> Give Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-[#FFD700] uppercase tracking-widest text-sm text-shadow">Contact Us</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt mt-1 text-[#CC0000] text-xl"></i>
                <span className="text-sm leading-relaxed">{CHURCH_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-phone-alt text-[#CC0000] text-xl"></i>
                <span className="font-bold text-white">{CHURCH_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-envelope text-[#CC0000] text-xl"></i>
                <span className="text-sm">{CHURCH_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div id="give">
            <h4 className="font-bold text-lg mb-8 text-[#FFD700] uppercase tracking-widest text-sm text-shadow">Support Us</h4>
            <p className="text-sm text-slate-400 mb-6">"Honor the Lord with your substance..." Your giving powers our missions and outreach.</p>
            <div className="space-y-4">
              <a href="#give" className="w-full bg-[#CC0000] text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl flex items-center justify-center gap-3">
                <i className="fas fa-heart"></i> Tithe & Offering
              </a>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 group hover:border-[#FFD700] transition-colors cursor-pointer">
                <p className="text-[10px] uppercase text-slate-500 font-black mb-2 tracking-tighter">Mobile Transfer</p>
                <p className="text-sm text-white font-mono">Kingdom Global Bank</p>
                <p className="text-xl text-[#FFD700] font-black font-mono mt-1">1012345678</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} RCCG Holy Ghost Zone. Anointed to excel.</p>
          <div className="flex gap-8 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
