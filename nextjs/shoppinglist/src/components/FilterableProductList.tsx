import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import type { FilterableProductListProps } from "../types";

export default function FilterableProductList(
  props: FilterableProductListProps
) {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
