
import React from 'react';
import { SERVICE_TIMES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 className="text-[#CC0000] font-bold tracking-[0.2em] uppercase mb-4">Join Us This Week</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003399] mb-12">Service Schedules</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_TIMES.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#003399]/10 rounded-2xl flex items-center justify-center text-[#003399] text-3xl mb-6 mx-auto group-hover:bg-[#003399] group-hover:text-white transition-colors">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <p className="text-[#CC0000] font-bold text-sm uppercase mb-1">{service.day}</p>
              <h4 className="text-xl font-bold text-[#003399] mb-4">{service.title}</h4>
              <div className="flex items-center justify-center gap-2 text-slate-500 font-semibold mb-4 bg-slate-100 py-2 rounded-full">
                <i className="far fa-clock"></i> {service.time}
              </div>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#003399] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Coming from out of town?</h3>
              <p className="text-slate-200">We would love to help you plan your visit! We have free transport services and a warm welcome waiting for you.</p>
            </div>
            <button className="whitespace-nowrap bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Get Directions & Info
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
