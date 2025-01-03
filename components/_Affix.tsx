/**
 * Component: _Affix
 */

'use client';

import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

export default function _Affix() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 10, right: 10 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            radius="xl"
            variant="light"
            leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
