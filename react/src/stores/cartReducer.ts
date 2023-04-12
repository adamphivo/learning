import { Cart } from "../types";

export function cartReducer(cart: Cart, action: any): Cart {
  switch (action) {
    case "nothing": {
      return cart;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
