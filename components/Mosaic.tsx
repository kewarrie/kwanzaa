/**
 * Component: Mosaic
 */

'use client';

import { useState } from 'react';

import type { VoteProps } from '@/lib/utils';

import { Autocomplete, Grid, Space, rem } from '@mantine/core';
import { IconUserSearch } from '@tabler/icons-react';

import Tile from './Tile';

interface TesseraeProps {
  tesserae: [VoteProps];
  baseUrl: string;
  totalPages?: number;
  perPage?: number;
}

export default function Mosaic({ tesserae, baseUrl }: TesseraeProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered tesserae based on the search query
  const filteredTesserae = tesserae.filter(tessera => 
    tessera.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tessera.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Grid gutter="lg">
        <Grid.Col>
          <Autocomplete
            variant="filled"
            radius="xl"
            placeholder="Search using name, constituency or county"
            leftSection={<IconUserSearch style={{ width: rem(16), height: rem(16) }} />}
            value={searchQuery}
            onChange={setSearchQuery} />
        </Grid.Col>
      </Grid>

      <Space h="md" />
      
      <Grid gutter="lg" justify="flex-start" align="stretch">
        {filteredTesserae.map((tessera) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3, xl: 2 }} p="md" key={tessera.id}>
            <Tile tessera={tessera} baseUrl={baseUrl} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
