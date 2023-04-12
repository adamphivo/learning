import type { CartItem } from "../../../types";
import { useState } from "react";

interface Props {
  item: CartItem;
  handleEdit: (item: CartItem) => void;
}

export default function CartItemStock({
  item,
  handleEdit,
}: Props): JSX.Element {
  const [count, setCount] = useState(item.stock);
  function handleIncrease() {
    setCount(count + 1);
    handleEdit({ ...item, stock: count });
  }
  function handleDecrease() {
    setCount(count - 1);
    handleEdit({ ...item, stock: count });
  }
  return (
    <>
      <div>
        <button onClick={handleDecrease}>-</button>
        <div>{count}</div>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}
