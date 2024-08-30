/**
 * Page: Error 404
 */

import { Center, Image, Text } from '@mantine/core';

export default function Footer() {
  return(
    <Center style={{ width: '100%', height: '100vh' }}>
      <Image src="/logo.png" mr="xl" width={30} height={30} alt="Logo" />
      <Text size="xs" tt="uppercase">404 &bull; page could not be found</Text>
    </Center>
  );
}
