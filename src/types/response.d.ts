export interface Category {
  id: number;
  title: string;
}

export interface Bookmark {
  id: number;
  title: string;
  url: string;
  category: Category;
  visits: number;
  createdAt: string;
  tags: string[];
}
