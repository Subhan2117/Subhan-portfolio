import { Code, Database, Server, Globe } from 'lucide-react';
import ShieldCheckIcon from '@/app/components/icons/ShieldCheckIcon';
import SparklesIcon from '@/app/components/icons/SparklesIcon';

export const skills = [
  { name: 'Next.js', icon: Globe, level: 92, category: 'frontend' },
  { name: 'React', icon: Code, level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SparklesIcon, level: 90, category: 'frontend' },
  { name: 'Node.js & Express', icon: Server, level: 88, category: 'backend' },
  {
    name: 'PostgreSQL (Neon) + Prisma',
    icon: Database,
    level: 85,
    category: 'backend',
  },
  {
    name: 'Auth (NextAuth / Supabase)',
    icon: ShieldCheckIcon,
    level: 82,
    category: 'tools',
  },
];
