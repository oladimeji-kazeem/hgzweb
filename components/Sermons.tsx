
import React from 'react';
import { FEATURED_SERMONS } from '../constants';

const Sermons: React.FC = () => {
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

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h3 className="text-[#CC0000] font-bold tracking-[0.2em] uppercase mb-4">Inspiration Everywhere</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003399]">Latest Sermons</h2>
          </div>
          <a 
            href="#sermons-page"
            className="bg-slate-100 text-[#003399] px-6 py-3 rounded-full font-bold hover:bg-[#003399] hover:text-white transition-all flex items-center gap-2"
          >
            View Sermon Archive <i className="fas fa-external-link-alt"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {FEATURED_SERMONS.map((sermon) => (
            <div key={sermon.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#CC0000] text-xl shadow-2xl">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#CC0000] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {sermon.category}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#003399] group-hover:text-[#CC0000] transition-colors mb-3">
                {sermon.title}
              </h4>
              <div className="flex items-center justify-between text-slate-500 text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><i className="fas fa-user"></i> {sermon.speaker}</span>
                  <span className="flex items-center gap-1"><i className="far fa-calendar"></i> {sermon.date}</span>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleShare(sermon.title, sermon.speaker); }}
                  className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#CC0000] hover:bg-red-50 transition-all"
                  title="Share Sermon"
                >
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
