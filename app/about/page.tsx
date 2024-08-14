/**
 * Import _AppShell
 */
import _AppShell from "@/components/_AppShell";
import { Title } from "@mantine/core";


/**
 * React Render
 */

export default async function Page() {
  
    return(
      <>
        <_AppShell>
            <Title order={1}>About</Title>
            {/* #TODO - not sure what to cover here...about the govt, about the team or about the law...i forgot */}
        </_AppShell>
      </>
    );
  }
