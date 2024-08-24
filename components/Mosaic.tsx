/**
 * Component: Mosaic
 */

'use client';

import { useState } from 'react';

import type { VoteProps } from '@/lib/utils';

import { Autocomplete, Grid, Space } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

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
          <Autocomplete value={searchQuery} onChange={setSearchQuery} rightSection={<IconSearch />} placeholder="Search using name or location" />
        </Grid.Col>
      </Grid>

      <Space h={'xl'} />
      
      <Grid gutter="lg">
        {filteredTesserae.map((tessera) => (
          <Grid.Col span={{ base: 12, md: 3, lg: 2, xl: 2 }} p={'md'} key={tessera.id}>
            <Tile tessera={tessera} baseUrl={baseUrl} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
