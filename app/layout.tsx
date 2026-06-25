import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARMY Command Center | Organize campanhas BTS com mais clareza',
  description: 'Entre na lista de teste do ARMY Command Center, uma central para fanbases BTS acompanharem campanhas, metas de streaming e próximas ações.',
  metadataBase: new URL('https://armycommandcenter.com'),
  openGraph: {
    title: 'ARMY Command Center | Organize campanhas BTS com mais clareza',
    description: 'Uma central para líderes de fanbase acompanharem resultados, metas e mobilização em campanhas ARMY.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARMY Command Center - central para campanhas BTS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARMY Command Center | Organize campanhas BTS com mais clareza',
    description: 'Painel, metas e próximas ações para campanhas ARMY.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}