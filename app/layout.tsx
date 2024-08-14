/**
 * Root Layout
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */

import '@mantine/core/styles.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    default: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: "Makosa ya kwanza. Onyo la kwanza. Sababu ya kwanza.",
};

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'monospace',
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
