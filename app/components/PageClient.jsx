'use client';

import { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import CursorGlow from './ui/CursorGlow';

export default function PageClient({ blogPosts }) {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
      const y = window.scrollY + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative text-white overflow-hidden">
      <CursorGlow />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Blog posts={blogPosts} />
      <Contact />
      <Footer />
    </div>
  );
}
