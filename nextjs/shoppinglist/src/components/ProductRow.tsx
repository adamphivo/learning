import type { ProductRowProps } from "../types";
export default function ProductRow(props: ProductRowProps) {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: "red" }}>{props.product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}
