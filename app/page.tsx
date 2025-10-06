export const runtime = 'edge';

/**
 * Root Page
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */

import type { VoteProps } from '@/lib/utils';

import _AppShell from '@/components/_AppShell';

import Mosaic from "@/components/Mosaic";

/**
 * Custom Function: load_data()
 * 
 * This function loads server-side 
 * 
 * Load list of MPs and their respective votes from the API.
 * The API is a hosted instance of Pocketbase.
 */
async function load_data() {

  /**
   * This section loads all the application data from the API.
   * 
   * API_URL: (string) https://example.com
   * API_PER_PAGE: (int) 350
   * API_SORT: (string) full_name,represents,location
   */
  const res: any = await fetch(`${process.env.API_URL}?perPage=${process.env.API_PER_PAGE}&sort=${process.env.API_SORT}&skipTotal=True`);
  
  if (!res.ok) {
    // TO-DO: Handle error better visually in render fun()
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

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
