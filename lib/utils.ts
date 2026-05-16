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
  vote: string;
  political_party: string;
  r2: string;
  r2_updated_at: string;
  /* Pocketbase */
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}
