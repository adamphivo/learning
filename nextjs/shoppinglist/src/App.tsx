import products from "./mockup";
import FilerableProductList from "./components/FilterableProductList";

function App() {
  return <FilerableProductList products={products} />;
}

export default App;
