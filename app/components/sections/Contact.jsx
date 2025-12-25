'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-amber-200 mb-4">
              Let’s Work Together
            </h3>
            <p className="text-slate-200/90 mb-6">
              Open to internships, collaborations, and interesting projects.
              Feel free to reach out.
            </p>

            <div className="space-y-4 text-slate-200/80">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-300" />
                subhannadeem06@gmail.com
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-3 text-amber-300" />
                github.com/Subhan2117
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-3 text-amber-300" />
                linkedin.com/in/subhan-nadeem-7847312a0/
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-[0_25px_80px_rgba(5,5,15,0.65)]">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/15 rounded px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400/80 focus:outline-none focus:ring-0"
                placeholder="Your Name"
                disabled={isSubmitting}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/15 rounded px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400/80 focus:outline-none focus:ring-0"
                placeholder="Your Email"
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/15 rounded px-3 py-2 text-white min-h-[120px] placeholder:text-white/50 focus:border-blue-400/80 focus:outline-none focus:ring-0"
                placeholder="Tell me about your project..."
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 text-white py-2 rounded-md font-semibold shadow-[0_15px_45px_rgba(37,99,235,0.45)] hover:opacity-95 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === 'success'
                      ? 'text-emerald-300'
                      : 'text-red-300'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
