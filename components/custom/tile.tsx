/**
 * Component: Tile
 */

"use client";

import type { VoteProps } from "@/lib/utils";

import { Card, Image, Text } from "@mantine/core";

interface TileProps {
  tessera: VoteProps;
  baseUrl: string;
}

export default function Tile({ tessera, baseUrl }: TileProps) {
  
  return (
    <div className="p-4">
      <Card shadow="md" radius="md" className="h-full">
            <Card.Section>
              <Image src={`${baseUrl}/${tessera.id}/${tessera.avatar}`} alt={tessera.full_name} radius="md" h={250} style={{ objectPosition: 'top' }} />
            </Card.Section>
            {/* #TODO - Add green tick or red x depending on how they voted - pick a strategy between using a watermark, a chip on the top right of the image or displaying as bool in description area  */}

            <Text size="lg" mt="md" fw={500}>
              {tessera.full_name}
            </Text>
            <Text size="sm" color="dimmed">
              {tessera.represents}: {tessera.location}
            </Text>
          </Card>
    </div>
  );
}
