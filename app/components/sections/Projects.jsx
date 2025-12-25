import Link from 'next/link';
import { projects } from '@/app/data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.25),transparent_50%)]" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-slate-300/80 mt-3">
            A snapshot of what I’ve been shipping recently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-blue-300/70 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
