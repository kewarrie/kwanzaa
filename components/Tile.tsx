/**
 * Component: Tile
 */

'use client';

import type { VoteProps } from '@/lib/utils';

import { Avatar, Badge, Center, Card, Group, Stack, Text } from '@mantine/core';

interface TileProps {
  tessera: VoteProps;
  baseUrl: string;
}

export default function Tile({ tessera, baseUrl }: TileProps) {
  
  return (
    <Card radius="md" className="h-full" withBorder>
      <Stack h={200} align="stretch" justify="space-around" gap="sm">
        <Card.Section p="sm" withBorder>
          <Group justify="space-between" align="flex-start">
            <Avatar
              size={60}
              src={`${baseUrl}/${tessera.id}/${tessera.avatar}`}
              alt={tessera.full_name}
              name={tessera.full_name}
              color="initials"
            />
            <Stack align="flex-end">
              {tessera.vote === 'YES' && (<Badge variant="light" color="red" size="xl">Yes</Badge>)}
              {tessera.vote === 'NO' && (<Badge variant="light" color="green" size="xl">No</Badge>)}
              {tessera.vote === 'ABSENT' && (<Badge variant="light" color="blue" size="xl">ABSENT</Badge>)}
              {tessera.vote === 'UNKOWN' && (<Badge variant="light" color="yellow" size="xl">UNKOWN</Badge>)}
              {tessera.vote === 'DECEASED' && (<Badge variant="light" color="grey" size="xl">DECEASED</Badge>)}

              {tessera.location ? (<Text size="sm" c="dark.3" tt="capitalize">{tessera.location}</Text>) : (<Text size="sm" c="dark.4" tt="capitalize">N/A</Text>)}
            </Stack>
          </Group>
        </Card.Section>

        <Card.Section p="sm" withBorder>
          <Center h={45}>
            <Text size="xs" ta="center">{tessera.full_name}</Text>
          </Center>
        </Card.Section>

        <Card.Section p="sm">
          {tessera.represents === 'CONSTITUENCY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Member of Parliament</Text>)}
          {tessera.represents === 'COUNTY' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">County Woman Representative</Text>)}
          {tessera.represents === 'NOMINATED' && (<Text size="sm" c="dimmed" tt="uppercase" ta="center">Nominated Representative</Text>)}
        </Card.Section>
      </Stack>
    </Card>
  );
}
