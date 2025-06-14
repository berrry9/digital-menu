export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
  calories: number;
  volume?: string;
  ingredients: string[];
  available: boolean;
  quantity?: number;
  rating?: number;
  isFavorite?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

export interface SubCategory {
  id: string;
  name: string;
  parentCategory: string;
}

export interface User {
  name: string;
  avatar: string;
  roomNumber: string;
}