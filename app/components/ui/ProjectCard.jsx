'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const mobileTech = project.tech.slice(0, 3);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur shadow-[0_25px_80px_rgba(5,5,15,0.65)] hover:border-blue-400/40 transition flex flex-row gap-4 p-4 sm:p-0 sm:flex-col cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="h-24 w-24 sm:h-48 sm:w-full object-cover rounded-xl sm:rounded-none shrink-0"
          unoptimized
        />

        <div className="flex-1 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {project.title}
            </h3>
            {project.badge && (
              <span className="text-[11px] uppercase tracking-[0.3em] text-blue-200/80">
                {project.badge}
              </span>
            )}
          </div>
          <p className="text-slate-300/90 mt-2 hidden sm:block">
            {project.description}
          </p>
          {project.highlight && (
            <p className="text-sm text-blue-200/80 mt-3 hidden sm:block">
              {project.highlight}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-3 sm:hidden">
            {mobileTech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full border border-white/20 text-white/80 bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="hidden sm:flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/80 bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-3 sm:mt-6 text-amber-100/80">
            <a
              href={project.liveLink}
              aria-label={`${project.title} live site`}
              onClick={(event) => event.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={project.githubLink}
              aria-label={`${project.title} GitHub`}
              onClick={(event) => event.stopPropagation()}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_30px_120px_rgba(8,10,30,0.8)] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="h-56 w-full object-cover"
                  unoptimized
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="text-[11px] uppercase tracking-[0.3em] text-blue-200/80">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-300/90 leading-relaxed">
                  {project.description}
                </p>
                {project.role && (
                  <p className="text-sm text-white/70">
                    Role: <span className="text-white">{project.role}</span>
                  </p>
                )}
                {project.highlight && (
                  <p className="text-sm text-blue-200/80">
                    {project.highlight}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={`modal-${t}`}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/80 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 hover:bg-blue-400/30 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40 transition-colors"
                  >
                    Source Code
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="sm:hidden inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
