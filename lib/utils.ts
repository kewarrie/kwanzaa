/**
 * VoteProps
 */


export interface VoteProps {
  image: any;
  id: number;
  full_name: string;
  avatar: string;
  location: string;
  represents: string;
  second_reading: boolean;
  /* Pocketbase */
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}
