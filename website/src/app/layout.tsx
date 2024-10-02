import { Inter } from 'next/font/google';

import { Provider } from './provider';
import { Metadata } from 'next';
import { websiteConfig } from '../website.config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: websiteConfig.titleTemplate,
    default: websiteConfig.title,
  },
  description: websiteConfig.description,
  // openGraph: {
  //   images: '/og-image.png',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
