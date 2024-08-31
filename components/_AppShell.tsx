/**
 * Component: _AppShell
 */

'use client';

import classes from './_AppShell.module.css';

import Footer from './Footer';

import cx from 'clsx';

import { usePathname } from 'next/navigation';

import { ActionIcon, AppShell, Burger, Divider, Group, Space, Text, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconBook, IconMoonStars, IconSmartHome, IconSun } from '@tabler/icons-react';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  // Change app theme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  console.log(computedColorScheme);

  // Routing
  const pathname = usePathname();
  
  // AppShell/Navigation Drawer
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =useDisclosure();    

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }} padding="md">
      
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Text size="md">#RejectFinanceBill2024</Text>
          <ActionIcon
            variant="light"
            radius="xl"
            size="lg"
            aria-label="Change theme"
            c={computedColorScheme === 'light' ? 'purple' : 'yellow'}
            color={computedColorScheme === 'light' ? 'purple' : 'yellow'}
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        
        <Text ta="center">
          <ActionIcon
            variant="light"
            radius="xl"
            size="xl"
            aria-label="Home"
            component="a"
            href="/"
            c="orange"
            color="orange"
          >
            <IconSmartHome />
          </ActionIcon>
        </Text>
        
        <Space my="md" />
        
        <Text ta="center">
        <ActionIcon
            variant="light"
            radius="xl"
            size="xl"
            aria-label="About"
            component="a"
            href="/about"
            c="orange"
            color="orange"
          >
            <IconBook />
          </ActionIcon>
        </Text>
        
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <Divider my="xl" />
        <Footer />
      </AppShell.Main>
      
    </AppShell>
  );
}
