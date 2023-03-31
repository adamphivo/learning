import { Dispatch, SetStateAction } from "react";

// Data
export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export type ProductList = Array<Product>;

// Props
export interface FilterableProductListProps {
  products: ProductList;
}

export interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
  onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
}

export interface ProductTableProps {
  products: ProductList;
  filterText: string;
  inStockOnly: boolean;
}

export interface ProductCategoryRowProps {
  category: string;
}

export interface ProductRowProps {
  product: Product;
}
