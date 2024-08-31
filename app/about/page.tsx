/**
 * Page: About
 */

'use client';

import _AppShell from "@/components/_AppShell";

import { Container, Divider, Space, Text, Title } from "@mantine/core";
import { useColorScheme } from '@mantine/hooks';

export default function Page() {
  const colorScheme = useColorScheme();

  return(
    <>
      <_AppShell>
        <Container px={0} size="30rem">
          <Title order={1} c="dark.2">About Kwanzaa</Title>
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
          <Divider my="md" />
          <Title c="dark.2" size="sm" tt="uppercase" order={5}>Summary</Title>
          <Space my="md" />
          <Text ta="justify" my="md">
            On Tuesday, 25 June 2024 Kenyans stormed parliament after Members of Parliament passed the contested 
            Finance Bill 2024.
          </Text>
          <Divider my="md" />
          <Title c="dark.2" size="sm" tt="uppercase" order={5}>Sources</Title>
          <Space my="md" />
          <Text ta="justify" my="md">
            On Tuesday, 25 June 2024 Kenyans stormed parliament after Members of Parliament passed the contested 
            Finance Bill 2024.
          </Text>
          <Divider my="md" />
          <Title c="dark.2" size="sm" tt="uppercase" order={5}>Privacy Policy</Title>
          <Space my="md" />
          <Text ta="justify" my="md">
            Disclaimer on data collected. Link to analytics site.
          </Text>
          <Divider my="md" />
          <Title c="dark.2" size="sm" tt="uppercase" order={5}>Website Developers</Title>
          <Space my="md" />
          <Text ta="justify" my="md">
            Victoria Nyamai &bull; Kevin Marekia
          </Text>
        </Container>
      </_AppShell>
    </>
  );
  }
