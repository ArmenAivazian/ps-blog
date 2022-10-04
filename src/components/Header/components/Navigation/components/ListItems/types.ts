import type { Post, Subcategory } from "../../types";

export interface ListItemsProps {
  slug: string;
  subcategories: Subcategory[];
  posts: Post[];
}
