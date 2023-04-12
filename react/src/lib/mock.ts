import { faker } from "@faker-js/faker";
import { Cart, CartItem, Category } from "../types";

function generateCart(): Cart {
  const categories = generateCategories();
  const items = generateItems(categories);
  return {
    id: faker.datatype.number(),
    items: items,
  };
}

export function generateItem(): CartItem {
  const item: CartItem = {
    uuid: faker.datatype.uuid(),
    isDeliverable: faker.datatype.boolean(),
    isPromoted: faker.datatype.boolean(),
    description: faker.commerce.productDescription(),
    name: faker.commerce.productName(),
    categories: [],
    price: faker.commerce.price(),
    stock: faker.datatype.number(),
  };
  return item;
}

export function generateItems(categories: Category[]): CartItem[] {
  let items: CartItem[] = [];

  for (let i = 0; i < 100; i++) {
    items.push(generateItem());
  }

  return items;
}

export function generateCategories(): Category[] {
  let categories: Category[] = [];

  for (let i = 0; i < 20; i++) {
    categories.push({
      id: faker.datatype.number(),
      name: faker.commerce.department(),
    });
  }

  return categories;
}

export const mockCart = generateCart();
