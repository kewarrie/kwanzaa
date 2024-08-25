/**
 * Component: Tile
 */

'use client';

import type { VoteProps } from '@/lib/utils';

import { Avatar, Badge, Button, Card, Center, Drawer, Group, Image, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconArrowRight, IconLayersSubtract } from '@tabler/icons-react';

interface TileProps {
  tessera: VoteProps;
  baseUrl: string;
}

function DrawerDetails({ tessera, baseUrl }: TileProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return(
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={(
          <>
            {/* Representation */}
            {tessera.represents === 'CONSTITUENCY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Member of Parliament</Text>)}
            {tessera.represents === 'COUNTY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">County Woman Representative</Text>)}
            {tessera.represents === 'NOMINATED' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Nominated Representative</Text>)}
            {/* Location */}
            {tessera.location ? (<Text size="sm" c="dark.3" tt="capitalize">{tessera.location}</Text>) : (<Text size="sm" c="dark.4" tt="capitalize">N/A</Text>)}
          </>
        )}>
          <Image src={`${baseUrl}/${tessera.id}/${tessera.avatar}`} alt={tessera.full_name} radius="md" style={{ objectPosition: 'top' }} />
          <Text>{tessera.full_name}</Text>
      </Drawer>
      <Button
        leftSection={<IconLayersSubtract size={14} />}
        rightSection={<IconArrowRight size={14} />}
        variant="light"
        radius="xl"
        size="compact-md"
        color="blue.4"
        onClick={open}
      >
        Details
      </Button>
    </>
  );
}

export default function Tile({ tessera, baseUrl }: TileProps) {
  return (
    <Card radius="md" className="h-full" withBorder>
      <Stack h={250} align="stretch" justify="space-around" gap="sm">
        <Card.Section p="sm">
          {/* Representation */}
          {tessera.represents === 'CONSTITUENCY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Member of Parliament</Text>)}
          {tessera.represents === 'COUNTY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">County Woman Representative</Text>)}
          {tessera.represents === 'NOMINATED' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Nominated Representative</Text>)}
        </Card.Section>

        <Card.Section p="sm" withBorder>
          {/* Full Name */}
          <Center h={45}>
            <Text ta="center">{tessera.full_name}</Text>
          </Center>
        </Card.Section>

        <Card.Section p="sm">
          <Group justify="space-between" align="flex-start">
            {/* Elected Official Portrait */}
            <Avatar
              size={60}
              src={`${baseUrl}/${tessera.id}/${tessera.avatar}`}
              alt={tessera.full_name}
              name={tessera.full_name}
              color="initials"
            />
            <Stack align="flex-end">
              {/* Second Reading Vote */}
              {tessera.vote === 'YES' && (<Badge variant="outline" color="red" size="xl">Yes</Badge>)}
              {tessera.vote === 'NO' && (<Badge variant="outline" color="green" size="xl">No</Badge>)}
              {tessera.vote === 'ABSENT' && (<Badge variant="outline" color="grey" size="xl">ABSENT</Badge>)}
              {tessera.vote === 'UNKOWN' && (<Badge variant="outline" color="yellow" size="xl">UNKOWN</Badge>)}
              {tessera.vote === 'DECEASED' && (<Badge variant="outline" color="dark" size="xl">DECEASED</Badge>)}
              {/* Location */}
              {tessera.location ? (<Text size="sm" c="dark.3" tt="capitalize">{tessera.location}</Text>) : (<Text size="sm" c="dark.4" tt="capitalize">N/A</Text>)}
            </Stack>
          </Group>
        </Card.Section>
        {/* Drawer */}
        <DrawerDetails tessera={tessera} baseUrl={baseUrl} />
      </Stack>
    </Card>
  );
}
