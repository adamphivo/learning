import type { ProductCategoryRowProps } from "../types";

export default function ProductCategoryRow(props: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  );
}
