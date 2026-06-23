import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guia de Sobrevivência do BTS para Novas ARMYs',
  description: 'Landing page premium para vender o ebook Guia de Sobrevivência do BTS com copy otimizada, design elegante e oferta irresistível.',
  metadataBase: new URL('https://seubtsebook.com'),
  openGraph: {
    title: 'Guia de Sobrevivência do BTS para Novas ARMYs',
    description: 'Descubra tudo sobre BTS, membros, álbuns, termos da ARMY e comece com confiança.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Guia de Sobrevivência do BTS para Novas ARMYs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia de Sobrevivência do BTS para Novas ARMYs',
    description: 'A landing page perfeita para quem quer entrar no fandom BTS com segurança e estilo.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
