import type { Cart, CartItem } from "../../../types";
import CartItemStock from "./CartItemStock";

interface Props {
  handleDelete: (uuid: string) => void;
  handleEdit: (item: CartItem) => void;
  cart: Cart;
}

export default function CartItems({ handleEdit, handleDelete, cart }: Props) {
  const items = cart.items.map((i) => (
    <li key={i.uuid}>
      <span>{i.name}</span>
      <button onClick={() => handleDelete(i.uuid)}>Delete</button>
      <CartItemStock handleEdit={handleEdit} item={i} />
    </li>
  ));
  return (
    <>
      <ul>{items}</ul>
    </>
  );
}
