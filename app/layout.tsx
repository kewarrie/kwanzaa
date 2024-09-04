/**
 * Root Layout
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

import Script from 'next/script';

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
  breakpoints: {
    xl: '110em',
  },
});

import _Affix from '@/components/_Affix';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
          <_Affix />
        </MantineProvider>
      </body>
      <Script src={process.env.NEXT_PUBLIC_ANALYTICS_SITE_URL} data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_DATA_WEBSITE_ID} />
    </html>
  );
}
