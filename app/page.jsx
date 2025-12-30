import PageClient from './components/PageClient';
import { getBlogPosts } from './data/blogPosts';

export default function Page() {
  const blogPosts = getBlogPosts();
  return <PageClient blogPosts={blogPosts} />;
}
