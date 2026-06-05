/**
 * Component: Mosaic
 */

'use client';

import { useState } from 'react';

import type { VoteProps } from '@/lib/utils';

import { Grid, Space, TextInput, rem } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
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
  const [debounced] = useDebouncedValue(searchQuery, 500);

  // Filtered tesserae based on the search query
  const filteredTesserae = tesserae.filter(tessera => 
    tessera.location.toLowerCase().includes(debounced.toLowerCase()) || 
    tessera.full_name.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <>
      <Grid gutter="lg">
        <Grid.Col>
          <TextInput
            variant="filled"
            radius="xl"
            placeholder="Search using name, constituency or county"
            leftSection={<IconUserSearch style={{ width: rem(16), height: rem(16) }} />}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
          />
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
