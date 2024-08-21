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
          <Autocomplete
            placeholder="Search using name or location"
            rightSection={<IconSearch />}
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </Grid.Col>
      </Grid>

      <Space h={'xl'} />
      
      <Grid gutter="lg">
        {filteredTesserae.map((tessera) => (
          <Grid.Col span={{ base:12, md:4, lg:3, xl:3 }} p={'md'} key={tessera.id}>
            <Tile tessera={tessera} baseUrl={baseUrl} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
