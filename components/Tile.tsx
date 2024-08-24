/**
 * Component: Tile
 */

'use client';

import type { VoteProps } from '@/lib/utils';

import { Avatar, Card, Image, Text } from '@mantine/core';

interface TileProps {
  tessera: VoteProps;
  baseUrl: string;
}

export default function Tile({ tessera, baseUrl }: TileProps) {
  
  return (
    <Card shadow="md" radius="md" padding="lg" className="h-full" withBorder>
      <Card.Section p="lg">
        <Avatar src={`${baseUrl}/${tessera.id}/${tessera.avatar}`} alt={tessera.full_name} size="lg" />
        <Text size="lg" mt="md" fw={500}>{tessera.full_name}</Text>
        <Text size="sm" c="dimmed">{tessera.represents}: {tessera.location}</Text>
        <Text size="sm" c="dimmed">VOTE: {tessera.vote}</Text>
      </Card.Section>
      {/* 
        TO-DO
        -----
        Add green tick or red x depending on how they voted - pick a strategy
        between using a watermark, a chip on the top right of the image or displaying
        as bool in description area
      */}
    </Card>
  );
}
