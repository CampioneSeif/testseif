
export interface Category {
  id: string;
  name: string;
  code: string;
  image_path: string;
}

export interface CategoriesResponse {
  data: Category[];
  success: boolean;
}