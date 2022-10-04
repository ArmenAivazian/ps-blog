export interface Subcategory {
  name: string;
  slug: string;
  description: string;
  icon: {
    text: string;
  };
}

export interface Post {
  slug: string;
  title: string;
}

interface Category extends Subcategory {
  posts: Post[];
  subcategories: Subcategory[];
}

export interface CategoriesData {
  categories: {
    data: {
      categories: Category[];
    };
  };
}
