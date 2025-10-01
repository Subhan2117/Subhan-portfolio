// app/sitemap.xml/route.js
export async function GET() {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  // List real routes (avoid #anchors). Add more when you create pages.
  const urls = [
    { loc: `${site}/`,       changefreq: "weekly",  priority: "1.0" },
    // { loc: `${site}/projects`, changefreq: "monthly", priority: "0.8" },
    // { loc: `${site}/about`,    changefreq: "monthly", priority: "0.6" },
    // { loc: `${site}/contact`,  changefreq: "monthly", priority: "0.7" },
  ];

  const lastmod = new Date().toISOString();

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        ({ loc, changefreq, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
      )
      .join("") +
    `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
