/**
 * VoteProps
 */

export interface VoteProps {
  id: number;
  full_name: string;
  avatar: string;
  constituency: string;
  second_reading: boolean;
  /* Pocketbase */
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}
