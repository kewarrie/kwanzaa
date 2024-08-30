/**
 * Component: Tile
 */

'use client';

import type { VoteProps } from '@/lib/utils';

import { Avatar, Badge, Button, Card, Center, Divider, Drawer, Group, Image, Space, Stack, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconArrowRight, IconClock, IconFlag2, IconLayersSubtract } from '@tabler/icons-react';

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
        zIndex={400}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
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
          {/* National Assembly Member - Headshot */}
          <Image src={`${baseUrl}/${tessera.id}/${tessera.avatar}`} alt={tessera.full_name} radius="md" style={{ objectPosition: 'top' }} />
          
          <Space h="md" />
          
          {/* National Assembly Member - Full Name */}
          <Text tt="uppercase" size="xs" c="dark.2">Full Name</Text>

          <Space h="sm" />

          <Text>{tessera.full_name}</Text>
          
          <Divider my="md" variant="dashed" />
          
          {/* Section: Finance Bill 2024 Vote */}
          <Text tt="uppercase" size="xs" c="dark.2">Finance Bill 2024</Text>
          
          <Space h="sm" />
          
          <Group justify="space-between" align="center">
            
            <Text tt="capitalize" size="sm">Vote</Text>
            
            {tessera.vote === 'YES' && (<Badge variant="outline" color="red" size="xl">Yes</Badge>)}
            {tessera.vote === 'NO' && (<Badge variant="outline" color="green" size="xl">No</Badge>)}
            {tessera.vote === 'ABSENT' && (<Badge variant="outline" color="grey" size="xl">ABSENT</Badge>)}
            {tessera.vote === 'UNKOWN' && (<Badge variant="outline" color="yellow" size="xl">UNKOWN</Badge>)}
            {tessera.vote === 'DECEASED' && (<Badge variant="outline" color="dark" size="xl">DECEASED</Badge>)}

          </Group>
          
          <Divider my="md" variant="dashed" />
          
          {/* Section: Share */}
          <Text tt="uppercase" size="xs" c="dark.2">Affiliation</Text>

          <Space h="sm" />

          <Group justify="space-between" align="center">
            
            <Text tt="capitalize" size="sm">Political Party</Text>
            
            <Badge variant="light" color="dark.4" size="xl" rightSection={<IconClock style={{ width: rem(12), height: rem(12) }} />}>Coming Soon</Badge>

          </Group>

          <Space h={70} />

          {/* Section: Report Errors */}
          <Center>
            <Button
              size="compact-xs"
              variant="light"
              color="grey"
              component="a"
              href={`mailto:${process.env.NEXT_PUBLIC_APP_EMAIL}?subject=${'Kwanzaa: ' + tessera.full_name}`}
              target="_blank"
              rightSection={<IconFlag2 size={14} />}
            >
              report errors
            </Button>
          </Center>
      </Drawer>
      <Button
        leftSection={<IconLayersSubtract size={14} />}
        rightSection={<IconArrowRight size={14} />}
        variant="light"
        radius="xl"
        size="md"
        color="blue.4"
        onClick={open}
      >
        details
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
