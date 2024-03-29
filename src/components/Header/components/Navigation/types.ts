export interface Subcategory {
  name: string;
  slug: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
}

export interface Category extends Subcategory {
  isMainCategory: boolean;
  posts: Post[];
  subcategories: Subcategory[];
}

export interface NavigationProps {
  categories: CategoriesData;
}

export interface CategoriesData {
  data: {
    categories: Category[];
  };
}
