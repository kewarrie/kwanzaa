/**
 * Page: About
 */

'use client';

import _AppShell from "@/components/_AppShell";

import { PieChart } from '@mantine/charts';
import { Center, Container, Divider, Group, Space, Text, Title } from "@mantine/core";
import { useColorScheme } from '@mantine/hooks';

export default function Page() {
  const colorScheme = useColorScheme();

  return(
    <>
      <_AppShell>
        <Container px={0} size="30rem">
          
          <Title c="dark.2" order={1}>about kwanzaa</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md">
            On Tuesday, 25 June 2024 Kenyans stormed parliament after Members of Parliament passed the contested 
            Finance Bill 2024.
          </Text>
          
          <Text ta="justify" my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris eget felis 
            condimentum fringilla. Nunc pulvinar convallis leo, cursus venenatis eros hendrerit eget. Nam elementum 
            semper velit ut malesuada.
          </Text>
          
          <Text ta="justify" my="md">
            Suspendisse placerat dolor vel velit elementum, vel laoreet diam finibus. Donec 
            ac mi suscipit, congue enim quis, maximus metus. Donec euismod sagittis felis, quis blandit eros elementum 
            vitae. Duis faucibus ante leo, vel tincidunt eros porttitor at. Nulla hendrerit lectus ut tempor facilisis.
          </Text>
          
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
            Fig. 1: Distribution of votes cast by the National Assembly.
          </Text>
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Sources</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md">
            On Tuesday, 25 June 2024 Kenyans stormed parliament after Members of Parliament passed the contested 
            Finance Bill 2024.
          </Text>
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Data Privacy</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md">
            Disclaimer on data collected. Link to analytics site.
          </Text>
          
          <Divider my="xl" />
          
          <Title c="dark.2" size="sm" tt="uppercase" ta="center" order={3}>Website Developers</Title>
          
          <Space my="md" />
          
          <Text ta="justify" my="md">
            Victoria Nyamai &bull; Kevin Marekia
          </Text>

        </Container>
      </_AppShell>
    </>
  );
  }
