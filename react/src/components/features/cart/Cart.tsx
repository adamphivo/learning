import { useCart } from "../../../hooks/useCart";
import CartActions from "./CartActions";
import CartItems from "./CartItems";

export default function Cart() {
  const { cart, handleClearCart, handleDeleteItem, handleEditItem } = useCart();

  return (
    <div>
      <div>{cart.items.length}</div>
      <CartActions handleClear={handleClearCart} />
      <CartItems
        cart={cart}
        handleDelete={handleDeleteItem}
        handleEdit={handleEditItem}
      />
    </div>
  );
}
