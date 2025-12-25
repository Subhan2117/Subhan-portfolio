import { projects } from '@/app/data/projects';
import ProjectCard from '../components/ui/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.22),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.15),transparent_45%)]" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.4em] uppercase text-blue-200/80">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
            All Projects
          </h1>
          <p className="text-slate-300/80 mt-4">
            From platforms for real organizations to experimental front-end
            builds. Each focused on clean architecture, reliable data, and sharp
            UX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
