'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['18deg', '-18deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 pt-28 text-center"
      style={{ perspective: '1200px' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-70 [background:radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.22),transparent_45%),radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(234,179,8,0.18),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(12,20,40,0.65),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-12 max-w-5xl mx-auto z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/40 bg-blue-950/20 text-blue-200/90 text-xs font-mono tracking-[0.35em] uppercase backdrop-blur"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
          Available for Hire
        </motion.div>

        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative cursor-default py-6"
        >
          <div
            className="relative z-10 font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 flex flex-col items-center leading-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
            style={{ transform: 'translateZ(70px)' }}
          >
            <h1 className="text-4xl md:text-7xl font-serif">FULL STACK</h1>
            <h1 className="text-4xl md:text-7xl font-sans bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text text-transparent">
              DEVELOPER
            </h1>
          </div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center font-black tracking-tight text-blue-500/10 select-none pointer-events-none"
            style={{ transform: 'translateZ(-40px)' }}
          >
            <h1 className="text-4xl md:text-7xl font-serif">FULL STACK</h1>
            <h1 className="text-4xl md:text-7xl font-sans">DEVELOPER</h1>
          </div>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-light text-slate-200">
            Crafting{' '}
            <span className="text-amber-300 font-serif italic">
              robust architectures
            </span>{' '}
            with{' '}
            <span className="text-blue-300 font-mono">
              modern_integrations
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Specializing in Next.js, React, and cinematic product experiences
            that blend performance, storytelling, and tactile interactions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
        >
          <button
            onClick={() => scrollToSection?.('projects')}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-400 bg-blue-950/40 px-7 py-3 text-blue-100 font-semibold tracking-wide hover:bg-blue-500/90 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.55)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-slate-200 hover:text-white hover:border-white/40 transition-colors"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="flex justify-center gap-6 text-amber-100/80 pt-4">
          <Link href="https://github.com/Subhan2117" aria-label="GitHub">
            <Github />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin />
          </Link>
          <Link href="mailto:subhannadeem06@gmail.com" aria-label="Email">
            <Mail />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
