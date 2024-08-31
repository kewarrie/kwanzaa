/**
 * Component: _AppShell
 */

'use client';

import classes from './_AppShell.module.css';

import cx from 'clsx';

import { usePathname } from 'next/navigation';

import { ActionIcon, AppShell, Burger, Button, Divider, Group, Stack, Text, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconBook, IconBrandDiscordFilled, IconExternalLink, IconMoonStars, IconSmartHome, IconSun } from '@tabler/icons-react';

import Footer from './Footer';

export default function _AppShell({ children }: { children: React.ReactNode; }) {
  // Allow the user to change the application theme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  // Get the current URL
  const pathname = usePathname();
  
  // _AppShell Drawer toggle
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =useDisclosure();    

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ 
        width: 80,
        breakpoint: 'sm',
        collapsed: {
          mobile: !mobileOpened,
          desktop: !desktopOpened 
        }
      }}
      padding="md"
    >
      
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
        
        {/* Large Screens */}
        <Stack h="100%" align="center" justify="center" gap="xl" visibleFrom="sm">
          <Tooltip label="homepage" position="right" offset={30}>
            <ActionIcon
              variant="light"
              radius="xl"
              size="xl"
              aria-label="Home"
              component="a"
              href="/"
              data-disabled={pathname === "/"}
              onClick={(event) => pathname === "/" && event.preventDefault()}
            >
              <IconSmartHome />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="about kwanzaa" position="right" offset={30}>
            <ActionIcon
              variant="light"
              radius="xl"
              size="xl"
              aria-label="About"
              component="a"
              href="/about"
              data-disabled={pathname === "/about"}
              onClick={(event) => pathname === "/about" && event.preventDefault()}
            >
              <IconBook />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="join us on discord" position="right" offset={30}>
            <ActionIcon
              variant="filled"
              radius="xl"
              size="xl"
              aria-label="Discord"
              component="a"
              href={process.env.NEXT_PUBLIC_DISCORD_URL}
              target="_blank"
              c="white"
              color="#5865F2"
            >
              <IconBrandDiscordFilled />
            </ActionIcon>
          </Tooltip>
        </Stack>
        {/* ENDOF Larger Screens */}

        {/* Smaller Screens */}
        <Stack h="100%" align="stretch" justify="center" gap="xl" hiddenFrom="sm">
          <Button
            fullWidth
            variant="light"
            radius="xl"
            size="lg"
            aria-label="Home"
            component="a"
            href="/"
            data-disabled={pathname === "/"}
            onClick={(event) => pathname === "/" && event.preventDefault()}
            leftSection={<IconSmartHome />}
          >
            homepage
          </Button>
          <Button
            fullWidth
            variant="light"
            radius="xl"
            size="lg"
            aria-label="About"
            component="a"
            href="/about"
            data-disabled={pathname === "/about"}
            onClick={(event) => pathname === "/about" && event.preventDefault()}
            leftSection={<IconBook />}
          >
            about kwanzaa
          </Button>
          <Button
            fullWidth
            variant="filled"
            radius="xl"
            size="lg"
            aria-label="Discord"
            component="a"
            href={process.env.NEXT_PUBLIC_DISCORD_URL}
            target="_blank"
            c="white"
            color="#5865F2"
            leftSection={<IconBrandDiscordFilled />}
            rightSection={<IconExternalLink />}
          >
            join us on discord
          </Button>
        </Stack>
        {/* ENDOF Smaller Screens */}
        
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <Divider my="xl" />
        <Footer />
      </AppShell.Main>
      
    </AppShell>
  );
}
