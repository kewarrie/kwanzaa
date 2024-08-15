/**
 * Root Page
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */

/**
 * Import single item props: VoteProps
 */
import type { VoteProps } from '@/lib/utils';

/**
 * Import _AppShell
 */
import _AppShell from '../components/_AppShell';

/**
 * Import Mosaic
 */
import Mosaic from "@/components/Mosaic";

/**
 * Custom Function: load_data()
 * 
 * Load data from the API, a hosted instance of Pocketbase.
 */
async function load_data() {
  const res: any = await fetch(`${process.env.API_URL}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

/**
 * React Render
 */

export default async function Page() {
  const data: { page: number, perPage: number, totalItems: number, totalPages: number, items: [VoteProps] } = await load_data();
  const baseUrl = (`${process.env.IMAGE_URL}`);

  return(
    <>
      <_AppShell>
        <Mosaic tesserae={data.items} baseUrl={baseUrl} totalPages={data.totalPages} perPage={data.perPage}/>
      </_AppShell>
    </>
  );
}
