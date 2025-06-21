export function generateSitemap(): string {
  const baseUrl = 'https://lisanail.pl';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0',
      hreflang: [
        { hreflang: 'pl', href: baseUrl },
        { hreflang: 'uk', href: `${baseUrl}/uk` },
        { hreflang: 'en', href: `${baseUrl}/en` }
      ]
    },
    {
      loc: `${baseUrl}/uk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
      hreflang: [
        { hreflang: 'pl', href: baseUrl },
        { hreflang: 'uk', href: `${baseUrl}/uk` },
        { hreflang: 'en', href: `${baseUrl}/en` }
      ]
    },
    {
      loc: `${baseUrl}/en`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
      hreflang: [
        { hreflang: 'pl', href: baseUrl },
        { hreflang: 'uk', href: `${baseUrl}/uk` },
        { hreflang: 'en', href: `${baseUrl}/en` }
      ]
    }
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.hreflang.map(link => `
    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`).join('')}
  </url>`).join('')}
</urlset>`;

  return xmlContent;
}
