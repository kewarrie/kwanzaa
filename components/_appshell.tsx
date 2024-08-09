'use client';

import Image from 'next/image';

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={handlers.toggle} hiddenFrom="sm" size="sm" />
          <Image src="/logo.png" width={35} height={35} className="mx-auto my-4 lg:hidden" alt="Logo" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
