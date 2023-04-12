import type { Cart, CartItem } from "../types";
import { useReducer } from "react";
import { mockCart } from "../lib/mock";

function cartReducer(cart: Cart, action: any) {
  switch (action.type) {
    case "delete": {
      return {
        ...cart,
        items: cart.items.filter((i) => i.uuid !== action.uuid),
      };
    }
    case "add": {
      return {
        ...cart,
        items: [...cart.items, action.item],
      };
    }
    case "edit": {
      return {
        ...cart,
        items: cart.items.map((i) =>
          i.uuid === action.item.uuid ? action.item : i
        ),
      };
    }
    case "clear": {
      return {
        ...cart,
        items: [],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useCart() {
  const [cart, dispatch] = useReducer(cartReducer, mockCart);

  function handleDeleteItem(uuid: string) {
    dispatch({ type: "delete", uuid: uuid });
  }

  function handleAddItem(item: CartItem) {
    dispatch({ type: "add", item: item });
  }

  function handleEditItem(item: CartItem) {
    dispatch({ type: "edit", item: item });
  }

  function handleClearCart() {
    dispatch({ type: "clear" });
  }

  return {
    cart,
    handleDeleteItem,
    handleAddItem,
    handleEditItem,
    handleClearCart,
  };
}
