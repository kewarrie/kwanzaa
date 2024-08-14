'use client';

import Image from 'next/image';

import cx from 'clsx';
import classes from './_AppShell.module.css';

import { ActionIcon, AppShell, Burger, Group, Text, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          
          {/* Below "sm" */}
          <Burger opened={opened} onClick={handlers.toggle} hiddenFrom="sm" size="sm" />
          <Image src="/logo.png" width={35} height={35} className="mx-auto my-4 lg:hidden mantine-hidden-from-sm" alt="Logo" />
          
          {/* Above "sm" */}
          <div>&nbsp;</div>
          <Text fz="xl" visibleFrom="md">/wʌn/</Text>
          
          <ActionIcon variant="light" radius="xl" aria-label="Change theme" size="xl" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
