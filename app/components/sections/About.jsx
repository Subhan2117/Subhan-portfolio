'use client';

import { motion } from 'framer-motion';
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative py-24 px-4"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.18),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-slate-200/90 space-y-6 text-lg">
            <p>
              I’m a Computer Science undergraduate focused on building real,
              end-to-end web applications. I care about clean architecture,
              practical security, and maintainable UI.
            </p>
            <p>
              Recent work includes an AI-powered job tracker (HireFlow), a
              PostgreSQL-backed hardware store platform, and multiple
              production-ready Next.js apps.
            </p>
            <p>
              My current stack centers around Next.js, Node/Express,
              PostgreSQL (Neon) with Prisma, and Tailwind CSS.
            </p>

            <a
              href="/resume.pdf"
              className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 text-white font-semibold tracking-wide shadow-[0_10px_35px_rgba(37,99,235,0.35)] hover:shadow-[0_15px_45px_rgba(37,99,235,0.45)] transition"
            >
              Download Resume
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-lg p-8 shadow-[0_25px_80px_rgba(15,23,42,0.55)]">
            <h3 className="text-2xl font-semibold text-amber-200 mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-2 text-slate-200/90">
              <li>🎓 CS undergrad at Hofstra University</li>
              <li>🧠 Focus on full-stack engineering</li>
              <li>🔐 Auth & role-based systems</li>
              <li>🚀 Shipping on Vercel</li>
              <li>☕ Coffee-powered builder</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
