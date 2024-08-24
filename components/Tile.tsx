/**
 * Component: Tile
 */

'use client';

import type { VoteProps } from '@/lib/utils';

import { Avatar, Badge, Box, Card, Group, Space, Stack, Text } from '@mantine/core';

interface TileProps {
  tessera: VoteProps;
  baseUrl: string;
}

export default function Tile({ tessera, baseUrl }: TileProps) {
  
  return (
    <Card radius="md" className="h-full" withBorder>
      <Stack h={200} p="md" align="stretch" justify="space-around" gap="md">
        <Card.Section>
          <Group justify="space-between" align="flex-start">
            <Avatar
              size={80}
              src={`${baseUrl}/${tessera.id}/${tessera.avatar}`}
              alt={tessera.full_name}
              name={tessera.full_name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}
            />
            {tessera.vote === 'YES' && (<Badge variant="light" color="red" size="xl">Yes</Badge>)}
            {tessera.vote === 'NO' && (<Badge variant="light" color="green" size="xl">No</Badge>)}
            {tessera.vote === 'ABSENT' && (<Badge variant="light" color="blue" size="xl">ABSENT</Badge>)}
            {tessera.vote === 'UNKOWN' && (<Badge variant="light" color="yellow" size="xl">UNKOWN</Badge>)}
            {tessera.vote === 'DECEASED' && (<Badge variant="light" color="grey" size="xl">DECEASED</Badge>)}
          </Group>
        </Card.Section>

        <Card.Section>
          <Text size="sm">{tessera.full_name}</Text>
        </Card.Section>

        <Card.Section>
          {tessera.location && (<Text size="sm" c="dark.3" tt="capitalize">{tessera.location}</Text>)}
          {tessera.represents === 'CONSTITUENCY' && (<Text size="sm" c="dimmed" tt="uppercase">Member of Parliament</Text>)}
          {tessera.represents === 'COUNTY' && (<Text size="sm" c="dimmed" tt="uppercase">County Woman Representative</Text>)}
          {tessera.represents === 'NOMINATED' && (<Text size="sm" c="dimmed" tt="uppercase">Nominated Representative</Text>)}
        </Card.Section>
      </Stack>
    </Card>
  );
}
