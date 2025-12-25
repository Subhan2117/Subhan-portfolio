import { skills } from '@/app/data/skills';
import SkillCard from '../ui/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50" />
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
