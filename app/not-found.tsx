/**
 * Page: Error 404
 */

import type { Metadata } from 'next'

import { Button, Center, Image, Text } from '@mantine/core';

import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: '404',
  description: 'page could not be found',
}

export default function Page() {
  return(
    <>
      <Center style={{ width: '100%', height: '40vh' }}>
        <Image src="/logo.png" fit="contain" width={50} height={50} alt="Logo" />
      </Center>
      <Center style={{ width: '100%', height: '40vh' }}>
        <Text size="md" c="dark.4">sorry, page could not be found.</Text>
      </Center>
      <Center style={{ width: '100%', height: '20vh' }}>
        <Button component="a" href="/" variant="light" color="green" size="xs" leftSection={<IconArrowLeft />}>back to site</Button>
      </Center>
    </>
  );
}
