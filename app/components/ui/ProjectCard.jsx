'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur shadow-[0_25px_80px_rgba(5,5,15,0.65)] hover:border-blue-400/40 transition"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="h-48 w-full object-cover"
        unoptimized
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-slate-300/90 mt-2">
          {project.description}
        </p>
        {project.highlight && (
          <p className="text-sm text-blue-200/80 mt-3">
            {project.highlight}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/80 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6 text-amber-100/80">
          <a href={project.liveLink}><ExternalLink /></a>
          <a href={project.githubLink}><Github /></a>
        </div>
      </div>
    </motion.div>
  );
}
