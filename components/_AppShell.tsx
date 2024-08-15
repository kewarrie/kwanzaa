/**
 * Component: _AppShell
 */

'use client';

import classes from './_AppShell.module.css';

import cx from 'clsx';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { ActionIcon, AppShell, Burger, Group, NavLink, Text, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'

import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  // Change app theme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  // Routing
  const pathname = usePathname();
  
  // AppShell/Navigation Drawer
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =useDisclosure(true);    

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }} padding="md">
      
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} size="sm" visibleFrom="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} size="sm" hiddenFrom="sm" />
          {/* Logo - below "sm" then above "sm" */}
          <Image src="/logo.png" width={35} height={35} className="mx-auto my-4 lg:hidden mantine-hidden-from-sm" alt={`${process.env.NEXT_PUBLIC_APP_NAME}`} />
          <Text fz="xl" visibleFrom="md">/ w ʌ n /</Text>
          {/* End of Logo */}
          <ActionIcon variant="light" radius="xl" aria-label="Change theme" size="xl" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink href="/" label="Home" active={pathname == '/'} />
        <NavLink href="/about" label="About" />   
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
      
    </AppShell>
  );
}
