import { Calendar } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur shadow-[0_20px_60px_rgba(5,5,15,0.7)] hover:border-blue-400/30 transition">
      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
      <p className="text-slate-200/80 mt-2">{post.excerpt}</p>
      <div className="flex items-center text-amber-100/80 mt-4 text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        {new Date(post.date).toLocaleDateString()} • {post.readTime}
      </div>
    </div>
  );
}
