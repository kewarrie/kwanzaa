/**
 * Page: About
 */

'use client';

import _AppShell from '@/components/_AppShell';

import { PieChart } from '@mantine/charts';
import { Button, Center, Code, Container, Divider, List, Space, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  const colorScheme = useColorScheme();

  return(
    <>
      <_AppShell>
        <Container px={0} size="30rem">
          
          <Title c="dark.2" order={1}>about kwanzaa</Title>
          
          <Space my="md" />

          {/* About Kwanzaa */}

          <Text ta="justify" my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque varius orci 
            sed aliquam. Vestibulum orci metus, pellentesque quis lobortis vel, tincidunt sit amet 
            lorem. Aenean fringilla, sapien sit amet sollicitudin commodo, sapien justo iaculis 
            nulla, sit amet sollicitudin enim eros sit amet urna.
          </Text>

          <Text ta="justify" my="md">
            Praesent ultricies nisi in turpis ornare tincidunt. Sed lectus lorem, elementum in velit 
            in, consequat maximus justo. 
          </Text>

          <Text ta="justify" my="md">
            Nullam leo metus, aliquet in orci sit amet, efficitur suscipit nunc. Integer ac porttitor 
            eros. Etiam laoreet, nibh non suscipit venenatis, justo erat suscipit enim, quis suscipit 
            dui odio at est. Nullam fringilla elit sit amet luctus mollis. 
          </Text>

          <Text ta="justify" my="md">
            Cras porttitor nisi et nisi tristique sagittis. Nam in libero eleifend, gravida nunc pulvinar, 
            congue nibh. Maecenas egestas semper convallis. Integer felis metus, rutrum sit amet consequat 
            ac, facilisis ac ante. Curabitur id metus scelerisque massa dignissim vestibulum. Sed fermentum 
            a velit at hendrerit.
          </Text>
          
          {/* END OF About Kwanzaa */}
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Summary of Votes</Title>
          
          <Space my="md" />
          
          <Center>
            <PieChart
              withLabelsLine={false}
              labelsPosition="outside"
              labelsType="value"
              withLabels
              withTooltip
              size={200}
              data={[
                { name: 'Yes', value: 197, color: 'red' },
                { name: 'No', value: 114, color: 'green' },
                { name: 'Absent', value: 21, color: 'grey' },
                { name: 'Uknown', value: 15, color: 'yellow' },
                { name: 'Unwell', value: 1, color: 'orange' },
                { name: 'Deceased', value: 1, color: 'dark' },
              ]}
            />
          </Center>
          <Text ta="center" my="xs" size="xs">
            Fig. 1: Tap to view the Finance Bill 2024 vote distribution.
          </Text>
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Sources</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md" size="sm">
            The data on this site has been collated from the following public sources:
          </Text>

          <List size="sm">
              <List.Item>@MzalendoWatch's <UnstyledButton component="a" href="https://x.com/MzalendoWatch/status/1803782515120873578" target="_blank" td="underline">thread</UnstyledButton> on X;</List.Item>
              <List.Item>The Parliament <UnstyledButton component="a" href="http://parliament.go.ke/" target="_blank" td="underline">website</UnstyledButton>; and</List.Item>
              <List.Item>The public social media profiles of the respective Members of Parliament, e.g. Facebook, Twitter, etc.</List.Item>
          </List>

          <Text ta="justify" my="md" size="sm">
            For corrections, please use the <Code>report errors</Code> button available on each 
            featured profile. Corrections shall be made within 48 hours.
          </Text>
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Data Privacy</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md" size="sm">
            All the information featured on this website is available in the public domain; including 
            the names, images, votes cast and political parties of the featured Members of Parliament.
          </Text>

          <Space my="md" />
          
          <Text ta="justify" my="md" size="sm">
            The site does not use cookies and does not collect any personally identifiable information. 
            For analytics purposes, events e.g. button clicks, are tracked anonymously. Users cannot be 
            identified and are never tracked across websites.
          </Text>
          
          <Space my="md" />

          <Button fullWidth tt="uppercase" component="a" href={process.env.NEXT_PUBLIC_ANALYTICS_SHARE_URL} target="_blank" variant="light" rightSection={<IconExternalLink size={14} />}>View Site Analytics</Button>

          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Site By</Title>
          
          <Space my="md" />

          <Button fullWidth tt="uppercase" component="a" href="https://victorianyamai.co.ke/" target="_blank" variant="light" c="black" color="green" rightSection={<IconExternalLink size={14} />}>Victoria Nyamai</Button>
          
          <Text ta="center" fs="italic" my="xs" size="sm">&amp;</Text>
          
          <Button fullWidth tt="uppercase" component="a" href="https://marekia.com/" target="_blank" variant="light" c="black" color="green" rightSection={<IconExternalLink size={14} />}>Kevin Marekia</Button>

        </Container>
      </_AppShell>
    </>
  );
  }
