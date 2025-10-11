'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe,
  Calendar,
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'blog',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated tech stack to match you
  const skills = [
    { name: 'Next.js', icon: <Globe className="w-6 h-6" />, level: 92 },
    { name: 'React', icon: <Code className="w-6 h-6" />, level: 90 },
    {
      name: 'Node.js & Express',
      icon: <Server className="w-6 h-6" />,
      level: 88,
    },
    {
      name: 'PostgreSQL (Neon) + Prisma',
      icon: <Database className="w-6 h-6" />,
      level: 85,
    },
    {
      name: 'Auth (NextAuth / Supabase)',
      icon: <ShieldCheckIcon />,
      level: 82,
    },
    { name: 'Tailwind CSS', icon: <SparklesIcon />, level: 90 },
    // Optional extras you’ve touched:
    // { name: "Supabase", icon: <Database className="w-6 h-6" />, level: 78 },
    // { name: "Vercel", icon: <Globe className="w-6 h-6" />, level: 84 },
    // { name: "Java (OOP)", icon: <Code className="w-6 h-6" />, level: 75 },
  ];

  // Simple local icons for two items above (Tailwind/auth) to keep style consistent
  function ShieldCheckIcon() {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  function SparklesIcon() {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17 2l1.2 2.8L21 6l-2.8 1.2L17 10l-1.2-2.8L13 6l2.8-1.2L17 2z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  // Updated projects we worked on together
  const projects = [
    {
      title: 'HireFlow – AI Job Tracker (Demo)',
      description:
        'Role-based job tracking with dashboards, saved/applied jobs, and auth. Built on Next.js with API routes, PostgreSQL (Neon) via Prisma, and NextAuth. Deployed on Vercel.',
      image: '/images/hireflow.png', // add file to /public/images/
      liveLink: 'https://hire-flow-orpin.vercel.app/',
      githubLink: 'https://github.com/Subhan2117/hire-flow', // replace with your repo when ready
      tech: [
        'Next.js',
        'API Routes',
        'PostgreSQL (Neon)',
        'Prisma',
        'NextAuth',
        'Tailwind CSS',
        'Vercel',
      ],
    },
    {
      title: 'RE’s Hardware Store',
      description:
        'E-commerce style app for tools inventory. Clean catalog UI with filters, saved items, and employer/user flows. Transitioned from mock data to PostgreSQL & API routes.',
      image: '/images/re-hardware-store.png', // add file to /public/images/
      liveLink: 'https://re-hardware-store.vercel.app/store', // replace when deployed
      githubLink: 'https://github.com/Subhan2117/re-hardware-store', // you can keep/update this
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    },
    {
      title: 'Movie App (React) – SEO Focus',
      description:
        'Client-side React movie explorer with SEO foundations (metadata, semantic structure, social tags). Clean routes and accessible UI; ready to migrate to Next.js for full SSR/ISR SEO.',
      image: '/images/movie-seo.png', // add file to /public/images/
      liveLink: '#', // replace when deployed
      githubLink: '#', // replace with your repo
      tech: ['React', 'React Router', 'SEO Meta', 'Tailwind CSS'],
    },
  ];

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt:
        'Best practices for structuring and scaling React apps for growth.',
      date: '2024-01-15',
      readTime: '8 min read',
    },
    {
      title: 'PostgreSQL + Prisma in Next.js',
      excerpt:
        'Schema modeling, migrations, and safe queries with Prisma on Neon.',
      date: '2024-01-08',
      readTime: '6 min read',
    },
    {
      title: 'Auth in Next.js: NextAuth vs Supabase',
      excerpt: 'When to use each approach, tradeoffs, and RLS basics.',
      date: '2024-01-01',
      readTime: '10 min read',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {'<Subhan />'}
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'blog', 'contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-200 scroll-smooth hover:text-cyan-400 ${
                      activeSection === item
                        ? 'text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                        : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'blog', 'contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 capitalize w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] animate-pulse">
              <Image
                src="/images/profile.jpg" // add your profile pic here
                alt="Profile"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build pragmatic, production-ready web apps with Next.js,
            Node/Express, and PostgreSQL. Clean UI, strong auth, and reliable
            data layers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://github.com/Subhan2117"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/subhan-nadeem-7847312a0/"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="subhannadeem"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I’m an aspiring full-stack developer focused on shipping
                polished, real-world apps. Recent work includes a role-based job
                tracker (HireFlow), a hardware store catalog experience, and a
                React SEO-focused movie explorer.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My current toolkit: Next.js, Node/Express, PostgreSQL (Neon)
                with Prisma, NextAuth/Supabase for auth, Tailwind CSS, and
                Vercel.
              </p>
              <a
                href="/resume.pdf"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🎓 CS undergrad at Hofstra</li>
                  <li>🧰 Next.js + PostgreSQL enthusiast</li>
                  <li>🔒 Practical auth & RLS learner</li>
                  <li>🚀 Deploying to Vercel</li>
                  <li>☕ Coffee-powered builder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3 group-hover:text-purple-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm border border-cyan-500/30 bg-cyan-500/20 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-base">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mt-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Open to internships and collaborations. If you have a question
                or an idea, say hi!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">
                    subhannadeem06@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">github.com/Subhan2117</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">
                    linkedin.com/in/subhan-nadeem-7847312a0/
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
              <div className="p-6">
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md bg-gray-800/50 border border-gray-600 px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md bg-gray-800/50 border border-gray-600 px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md bg-gray-800/50 border border-gray-600 px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md px-4 py-2 font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Subhan Nadeem. Built with Next.js and
            lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
