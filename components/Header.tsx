
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about-page' },
    { name: 'Services', href: '#services-page' },
    { name: 'Sermons', href: '#sermons-page' },
    { name: 'Give', href: '#give-page' },
    { name: 'Contact', href: '#contact-page' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-12 h-12 bg-[#003399] rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white group-hover:scale-110 transition-transform shadow-lg">
            HGZ
          </div>
          <div className="hidden sm:block">
            <h1 className={`font-black text-lg leading-tight tracking-tighter ${isScrolled ? 'text-[#003399]' : 'text-white'}`}>
              RCCG <span className="text-[#CC0000]">HGZ</span>
            </h1>
            <p className={`text-[9px] uppercase tracking-[0.3em] font-black ${isScrolled ? 'text-[#CC0000]' : 'text-slate-200'}`}>
              Raising Giants
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-black text-xs uppercase tracking-[0.2em] hover:text-[#CC0000] transition-all relative group ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all"></span>
            </a>
          ))}
          <a
            href="https://youtube.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#CC0000] text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-[0_10px_20px_rgba(204,0,0,0.3)] animate-pulse"
          >
            WATCH LIVE
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-[#003399]' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 border-t border-slate-100 shadow-2xl p-6 flex flex-col space-y-6 animate-in slide-in-from-top-10 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-900 font-black uppercase tracking-widest text-sm py-2 border-b border-slate-50 flex items-center justify-between"
            >
              {link.name}
              <i className="fas fa-chevron-right text-[10px] text-slate-300"></i>
            </a>
          ))}
          <a
            href="https://youtube.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#CC0000] text-white px-6 py-4 rounded-2xl font-black text-center text-sm uppercase tracking-widest shadow-xl"
          >
            WATCH LIVE SERVICE
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
