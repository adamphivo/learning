export interface Cart {
  id: number;
  items: CartItem[];
}

export interface CartItem {
  uuid: string;
  name: string;
  categories: Category[];
  description: string;
  price: string;
  stock: number;
  isPromoted: boolean;
  isDeliverable: boolean;
}

export interface Category {
  id: number;
  name: string;
}
