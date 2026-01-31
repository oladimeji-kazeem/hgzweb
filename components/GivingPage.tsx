
import React from 'react';

const GivingPage: React.FC = () => {
  const givingMethods = [
    {
      title: 'Online Transfer',
      desc: 'Quick and secure bank transfers to our dedicated accounts. Perfect for Tithes and Offerings.',
      icon: 'fa-university',
      details: 'Kingdom Global Bank | Acc: 1012345678',
      color: 'bg-[#003399]'
    },
    {
      title: 'Global Partners',
      desc: 'International members can give conveniently via PayPal or our secure Stripe portal.',
      icon: 'fa-globe',
      details: 'give@rccghgz.org',
      color: 'bg-[#CC0000]'
    },
    {
      title: 'Mobile Giving',
      desc: 'Give instantly using USSD or your mobile phone network billing system.',
      icon: 'fa-mobile-alt',
      details: '*777*123*AMOUNT#',
      color: 'bg-[#FFD700]'
    }
  ];

  return (
    <div className="pt-20 pb-20 animate-in fade-in duration-700 bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-[#FFD700] font-black tracking-[0.4em] uppercase mb-6 text-sm">Worship Through Giving</h3>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">PARTNER WITH <br/><span className="text-[#CC0000]">THE VISION</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl font-light italic leading-relaxed">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." - 2 Cor 9:7
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-10">
          {givingMethods.map((m, i) => (
            <div key={i} className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-50 flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500">
              <div className={`w-20 h-20 ${m.color} text-white rounded-[2rem] flex items-center justify-center text-3xl mb-10 shadow-xl`}>
                <i className={`fas ${m.icon}`}></i>
              </div>
              <h4 className="text-2xl font-black text-[#003399] mb-4 uppercase tracking-tight">{m.title}</h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{m.desc}</p>
              <div className="w-full bg-[#003399]/5 p-6 rounded-3xl font-mono text-sm font-black text-[#003399] border border-[#003399]/10">
                {m.details}
              </div>
              <button className="mt-8 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-[#CC0000] transition-colors shadow-lg">
                Proceed to Give
              </button>
            </div>
          ))}
        </div>

        {/* Why Give */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100">
          <div className="space-y-8">
            <h3 className="text-[#CC0000] font-black tracking-widest uppercase text-sm">Our Stewardship</h3>
            <h2 className="text-4xl md:text-6xl font-black text-[#003399] leading-none">Why Your <span className="text-[#CC0000]">Seed Matters</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">Your generous giving enables us to spread the gospel, support the needy, and maintain the house of God as a beacon of hope in our community.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Global Missionary Work',
                'Local Welfare & Food Bank',
                'Youth & Children Empowerment',
                'Digital Gospel Outreach',
                'Infrastructure Maintenance',
                'Community Medical Outreaches'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-8 h-8 bg-[#CC0000] text-white rounded-full flex items-center justify-center text-[10px] shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="text-slate-700 font-bold text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#003399] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] rounded-full -mr-16 -mt-16 opacity-10"></div>
            <h4 className="text-3xl font-black mb-6">Tax Benefits & Receipts</h4>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">We provide annual donation statements for all your contributions. Your giving is transparently managed and audited.</p>
            <div className="space-y-4">
              <button className="w-full bg-white text-[#003399] py-5 rounded-2xl font-black text-lg hover:bg-[#FFD700] transition-all">
                Request Statement
              </button>
              <p className="text-center text-[10px] uppercase font-black text-blue-300 tracking-[0.2em]">Contact: finance@rccghgz.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingPage;
