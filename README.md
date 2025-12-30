# Subhan Nadeem - Portfolio

This is my personal portfolio website. It highlights who I am, the work I’ve shipped,
and the tools I use to build production-ready web apps.

Live site: https://subhan-portfolio-navy.vercel.app

## Overview

- Home: hero, about, skills, projects, blog, and contact sections
- Projects: interactive cards with detailed modal views
- Skills: preview carousel on mobile + full skills page with filtering
- Blog: MDX-powered posts from `content/blog`
- Resume: downloadable PDF linked from the site

## Content Management

### Blog Posts (MDX)

Add new posts in `content/blog/*.mdx` with frontmatter:

```mdx
---
title: Your Title
excerpt: Short summary...
date: 2024-02-01
readTime: 5 min read
---
Your content...
```

### Resume

Place the PDF at `public/images/Resume.pdf`. The site links to `/images/Resume.pdf`
and triggers a download.

## License and Rights

Copyright (c) Subhan Nadeem. All rights reserved.

You may not copy, distribute, or use this site's design, content, or media
without explicit permission from the author. Code is provided for viewing only.
