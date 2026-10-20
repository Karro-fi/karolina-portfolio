import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karolina-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/case/academedia', '/case/kommunal', '/case/duro'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? 'monthly' : 'weekly',
    priority: path ? 0.8 : 1,
  }));
}
