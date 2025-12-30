'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function BlogCard({ post }) {
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
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur shadow-[0_20px_60px_rgba(5,5,15,0.7)] hover:border-blue-400/30 transition cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
        <p className="text-slate-200/80 mt-2">{post.excerpt}</p>
        <div className="flex items-center text-amber-100/80 mt-4 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(post.date).toLocaleDateString()} • {post.readTime}
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
              <div className="p-6 sm:p-8 border-b border-white/10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-amber-100/80 mt-3 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()} • {post.readTime}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto text-slate-200/90 leading-relaxed whitespace-pre-wrap">
                {post.content || post.excerpt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
