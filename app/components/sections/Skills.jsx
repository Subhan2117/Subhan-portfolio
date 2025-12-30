import Link from 'next/link';
import { skills } from '@/app/data/skills';
import SkillCard from '../ui/SkillCard';

export default function Skills() {
  const previewSkills = skills.slice(0, 6);

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50" />
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
        Technical Skills
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {previewSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-blue-300/70 transition-colors"
          >
            View All Skills →
          </Link>
        </div>
      </div>
    </section>
  );
}
