/**
 * Page: Error 404
 */

import { Button, Center, Image, Text } from '@mantine/core';

import { IconArrowLeft } from '@tabler/icons-react';

export default function Footer() {
  return(
    <>
      <Center style={{ width: '100%', height: '20vh' }}>
        <Image src="/logo.png" fit="contain" width={50} height={50} alt="Logo" />
      </Center>
      <Center style={{ width: '100%', height: '60vh' }}>
        <Text size="md" tt="uppercase" c="dark.4">404 &bull; page could not be found</Text>
      </Center>
      <Center style={{ width: '100%', height: '20vh' }}>
        <Button component="a" href="/" variant="light" color="green" size="xs" leftSection={<IconArrowLeft />}>back to site</Button>
      </Center>
    </>
  );
}
