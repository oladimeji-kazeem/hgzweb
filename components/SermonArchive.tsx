
import React, { useState } from 'react';
import { FEATURED_SERMONS } from '../constants';

const SermonArchive: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Breakthrough', 'Prosperity', 'Testimony', 'Victory', 'Faith'];

  const handleShare = (title: string, speaker: string) => {
    const shareData = {
      title: `Sermon: ${title}`,
      text: `Listen to "${title}" by ${speaker} at RCCG Holy Ghost Zone.`,
      url: window.location.origin + window.location.pathname + '#sermons-page',
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.debug('Error sharing:', err));
    } else {
      const fullText = `${shareData.text} ${shareData.url}`;
      navigator.clipboard.writeText(fullText).then(() => {
        alert('Sermon link copied to clipboard!');
      });
    }
  };

  const filteredSermons = filter === 'All' 
    ? FEATURED_SERMONS 
    : FEATURED_SERMONS.filter(s => s.category === filter);

  return (
    <div className="pt-20 pb-20 animate-in fade-in duration-700 bg-slate-50">
      {/* Header */}
      <div className="bg-[#003399] py-32 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#CC0000]/10 skew-y-3 translate-y-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-[#FFD700] font-black tracking-[0.3em] uppercase mb-4 text-sm">Media Vault</h3>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">THE <span className="text-[#CC0000]">WORD</span> HUB</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light">Feeding your spirit with the undiluted Word of God, anywhere and at any time. Your transformation begins with hearing.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search & Filters */}
        <div className="mb-16 space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="relative w-full md:w-96">
              <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input type="text" className="w-full bg-slate-50 border-none rounded-full pl-14 pr-6 py-4 focus:ring-2 focus:ring-[#003399]" placeholder="Search messages, speakers..." />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? 'bg-[#CC0000] text-white shadow-lg scale-105' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredSermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#CC0000] rounded-full flex items-center justify-center text-white text-xl shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                   <div className="bg-white/90 backdrop-blur-md text-[#003399] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    {sermon.category}
                  </div>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-[#CC0000] uppercase tracking-[0.2em]">{sermon.date}</span>
                </div>
                <h4 className="text-2xl font-black text-[#003399] mb-4 group-hover:text-[#CC0000] transition-colors leading-tight">{sermon.title}</h4>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#003399]/10 text-[#003399] rounded-full flex items-center justify-center font-black text-xs uppercase">
                      {sermon.speaker.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-800 uppercase tracking-widest">{sermon.speaker}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Main Sanctuary</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleShare(sermon.title, sermon.speaker); }}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#CC0000] hover:bg-red-50 transition-all"
                    title="Share Sermon"
                  >
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
           <button className="bg-white border-2 border-[#003399] text-[#003399] px-12 py-5 rounded-full font-black text-lg hover:bg-[#003399] hover:text-white transition-all shadow-xl">
             Explore Full Library
           </button>
        </div>
      </div>
    </div>
  );
};

export default SermonArchive;
