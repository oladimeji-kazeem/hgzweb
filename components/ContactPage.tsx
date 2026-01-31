
import React from 'react';
import { CHURCH_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-[#CC0000] font-bold tracking-[0.2em] uppercase mb-4 text-sm">Get in Touch</h3>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#003399]">Connect with <span className="text-[#CC0000]">Our Family</span></h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#003399] text-white rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#003399]">Location</h4>
                  <p className="text-slate-500 leading-relaxed">{CHURCH_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#CC0000] text-white rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-lg">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#CC0000]">Call Us</h4>
                  <p className="text-slate-500 font-bold">{CHURCH_INFO.phone}</p>
                  <p className="text-xs text-slate-400">Available 24/7 for urgent prayer requests</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#FFD700] text-[#003399] rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-lg">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#003399]">Email</h4>
                  <p className="text-slate-500">{CHURCH_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] relative">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348602747!2d3.472535!3d6.537233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf65709772c3d%3A0xa19f564344841961!2sIkorodu!5e0!3m2!1sen!2sng!4v1625585521000!5m2!1sen!2sng" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000] rounded-full -mr-16 -mt-16 filter blur-3xl opacity-20"></div>
            <h4 className="text-2xl font-bold mb-2">Prayer Request & Inquiries</h4>
            <p className="text-slate-400 mb-8 text-sm">Your information is confidential and will be treated with love.</p>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#CC0000] focus:bg-white/10 transition-all outline-none" placeholder="Your Full Name" />
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#CC0000] focus:bg-white/10 transition-all outline-none" placeholder="Email Address" />
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#CC0000] focus:bg-white/10 transition-all outline-none text-slate-400">
                  <option>Prayer Request</option>
                  <option>Counseling</option>
                  <option>Testimony</option>
                  <option>General Inquiry</option>
                </select>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#CC0000] focus:bg-white/10 transition-all outline-none" placeholder="Write your message here..."></textarea>
              </div>
              <button className="w-full bg-[#CC0000] text-white py-5 rounded-xl font-bold text-xl hover:bg-red-700 hover:scale-[1.01] transition-all shadow-xl flex items-center justify-center gap-3">
                Send Message <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
