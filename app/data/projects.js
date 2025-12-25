export const projects = [
  {
    title: 'RE’s Hardware Store — E-Commerce Platform',
    description:
      'A production-style commerce experience with a catalog search hub, curated promos, and guided checkout. Customers can filter inventory, view live stock, and check out securely while Stripe webhooks keep the admin dashboards synced.',
    image: '/images/re-hardware-store.png',
    liveLink: 'https://re-hardware-store.vercel.app/store',
    githubLink: 'https://github.com/Subhan2117/re-hardware-store',
    badge: 'Full-stack commerce',
    tech: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'Stripe Checkout',
      'Stripe Webhooks',
      'API Routes',
      'Tailwind CSS',
      'Vercel',
    ],
    highlight:
      'Architected the catalog, promo rails, cart, and webhook-safe order + inventory system powering the storefront.',
  },
  {
    title: 'HQCC — Hofstra Quantum Computing Club Platform',
    description:
      'A full-stack web platform for the Hofstra Quantum Computing Club, supporting member onboarding, event listings, board roles, and content management. Designed to scale with the organization and support future workshops and hackathons.',
    image: '/images/hqcc.svg',
    liveLink: '#',
    githubLink: '#',
    tech: [
      'Next.js',
      'React',
      'Firebase',
      'Firestore',
      'Authentication',
      'Tailwind CSS',
    ],
    highlight:
      'Built a real organization-facing platform with role-based access and dynamic content.',
  },
  {
    title: 'HireFlow — AI-Assisted Job Tracker',
    description:
      'A full-stack job tracking platform with role-based dashboards for users and employers. Includes saved jobs, applications, authentication, and PostgreSQL-backed data modeling. Built with scalability and clean architecture in mind.',
    image: '/images/hireflow.svg',
    liveLink: 'https://hire-flow-orpin.vercel.app/',
    githubLink: 'https://github.com/Subhan2117/hire-flow',
    tech: [
      'Next.js (App Router)',
      'PostgreSQL (Neon)',
      'Prisma',
      'NextAuth',
      'Tailwind CSS',
      'Vercel',
    ],
    highlight:
      'Designed role-based data access and schema modeling for users vs employers.',
  },
  {
    title: 'Movie Explorer — SEO-Focused React App',
    description:
      'A client-side React application for browsing movies with an emphasis on SEO fundamentals, semantic HTML, metadata handling, and accessible UI. Designed as a foundation for future SSR migration.',
    image: '/images/movie-explorer.svg',
    liveLink: '#',
    githubLink: '#',
    tech: [
      'React',
      'React Router',
      'SEO Meta Tags',
      'Accessible UI',
      'Tailwind CSS',
    ],
    highlight:
      'Focused on SEO-aware component structure and clean routing practices.',
  },
];
