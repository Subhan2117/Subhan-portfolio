'use client';

import { useMemo, useState } from 'react';
import { skills } from '@/app/data/skills';
import SkillCard from '@/app/components/ui/SkillCard';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Front End' },
    { id: 'backend', label: 'Back End' },
    { id: 'tools', label: 'More' },
  ];

  const visibleSkills = useMemo(() => {
    if (activeCategory === 'all') {
      return skills;
    }
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative min-h-screen py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.22),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.15),transparent_45%)]" />
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
        >
          ← Back to Home
        </a>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.4em] uppercase text-blue-200/80">
            Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
            All Skills
          </h1>
          <p className="text-slate-300/80 mt-4">
            Full-stack tools and platforms I use to ship production-ready work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                activeCategory === category.id
                  ? 'border-blue-300/80 text-white bg-blue-500/10'
                  : 'border-white/15 text-white/70 hover:text-white hover:border-blue-300/70'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
