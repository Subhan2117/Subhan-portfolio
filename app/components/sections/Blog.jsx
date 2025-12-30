import BlogCard from '../ui/BlogCard';

export default function Blog({ posts = [] }) {
  return (
    <section id="blog" className="relative py-24 px-4">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-900/30 via-transparent to-indigo-900/40" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-amber-300 bg-clip-text">
          Latest Blog Posts
        </h2>

        <div className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
