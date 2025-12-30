import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'blog');

const loadPosts = () => {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title || 'Untitled Post',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString().slice(0, 10),
        readTime: data.readTime || '5 min read',
        slug: file.replace(/\.mdx$/, ''),
        content: content?.trim() || '',
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getBlogPosts = () => loadPosts();
