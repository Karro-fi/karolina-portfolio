import type { Metadata } from 'next';
import { Jost, Sora } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karolina-portfolio.vercel.app';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Karolina Paraskevas · Experience Design',
    template: '%s | Karolina Paraskevas',
  },
  description:
    'Portfolio för Karolina Paraskevas, Experience Designer med fokus på UX/UI, tillgänglighet och tydlig visuell kommunikation.',
  openGraph: {
    title: 'Karolina Paraskevas · Experience Design',
    description: 'UX/UI · Accessibility · Visual Craft',
    type: 'website',
    locale: 'sv_SE',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Karolina Paraskevas · Experience Design' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karolina Paraskevas · Experience Design',
    description: 'UX/UI · Accessibility · Visual Craft',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${sora.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}
