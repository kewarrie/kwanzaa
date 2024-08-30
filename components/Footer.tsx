/**
 * Component: Footer
 */

'use client';

import { Autocomplete, Button, Center, Divider, Grid, Space, Text, rem } from '@mantine/core';

import { IconHeartFilled } from '@tabler/icons-react';

export default function Footer() {
  return(
    <>
      <Center>
        <Text size="xs" ta="center" tt="uppercase" mx="xs">Made with</Text>
        <IconHeartFilled style={{ width: rem(20), height: rem(20) }} color="red" />
        <Text size="xs" ta="center" tt="uppercase" mx="xs">in Nairobi, Kenya</Text>
      </Center>

      <Divider my="lg" />

      <Text c="dark" size="sm" ta="center" tt="uppercase">{process.env.NEXT_PUBLIC_BITCOIN_ADDRESS}</Text>
    </>
  );
}
