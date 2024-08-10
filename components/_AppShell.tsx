'use client';

import Image from 'next/image';

import { ActionIcon, AppShell, Burger, Group, useMantineColorScheme, useComputedColorScheme, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';


import cx from 'clsx';
import classes from './_AppShell.module.css';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [opened, handlers] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Burger opened={opened} onClick={handlers.toggle} hiddenFrom="sm" size="sm" />
          <Image src="/logo.png" width={35} height={35} className="mx-auto my-4 lg:hidden" alt="Logo" />
          <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
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
