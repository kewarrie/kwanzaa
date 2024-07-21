/**
 * Root Layout
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */

import type { Metadata } from "next";

import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: {
    template: '%s | K W A N Z A A',
    default: 'K W A N Z A A',
  },
  description: "Makosa ya kwanza. Onyo la kwanza. Sababu ya kwanza.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
