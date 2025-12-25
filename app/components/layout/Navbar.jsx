'use client';

import { Menu, X } from 'lucide-react';

export default function Navbar({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) {
  const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_45px_rgba(5,5,15,0.5)] mt-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text text-transparent">
          {'<Subhan />'}
        </div>

        <div className="hidden md:flex space-x-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition ${
                activeSection === item
                  ? 'text-amber-200'
                  : 'text-white/70 hover:text-blue-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
