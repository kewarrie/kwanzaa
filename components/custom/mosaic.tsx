/**
 * Component: Mosaic
 */

"use client";

import { useState } from 'react';
import Image from 'next/image';

import type { VoteProps } from "@/lib/utils";

import Tile from "./tile";
import { Autocomplete, Grid, GridCol, Space, Text, Button, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface TesseraeProps {
  tesserae: [VoteProps];
  baseUrl: string;
  totalPages: number;
  perPage: number;
}

export default function Mosaic({ tesserae, baseUrl, totalPages, perPage }: TesseraeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered tesserae based on the search query
  const filteredTesserae = tesserae.filter(tessera => 
    tessera.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tessera.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the items to display for the current page
  const startIndex = (currentPage - 1) * perPage;
  const currentItems = filteredTesserae.slice(startIndex, startIndex + perPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Grid className="container mx-auto p-3" gutter="lg" justify='center'>
        <GridCol span={{ base: 12 }}>
          <div className="text-center">
            {/* Your Title or Subtitle */}
          </div>
        </GridCol>
        <GridCol span={{ base: 12, md: 10, lg: 6, xl: 6 }} className="flex justify-center">
          <Autocomplete
            placeholder='Search using name or location'
            rightSection={<IconSearch />}
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </GridCol>
      </Grid>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Grid className="container mx-auto p-4" gutter="lg" justify='center'>
            {currentItems.map((tessera) => (
              <GridCol span={{ base:12, md:6, lg:4, xl:4 }} p={'md'} key={tessera.id}>
                <Tile tessera={tessera} baseUrl={baseUrl} />
              </GridCol>
            ))}
          </Grid>
        </div>
      </div>

      <Space h={'xl'} />

      {/* Pagination Controls */}
      <Group mt="lg">
        <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </Button>
      </Group>
    </>
  );
}
