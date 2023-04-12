import { useState } from "react";
import Cart from "./components/features/cart/Cart";
import ContextHookPage from "./components/features/context/Context";
import ColoredTitles from "./components/ColoredTitles";
import { TitleContext } from "./contexts/TitleContext";
import { useUser } from "./components/UserContext";
import { UserProvider } from "./components/UserContext";

function Container({ selected }: { selected: string }) {
  switch (selected) {
    case "cart": {
      return <Cart></Cart>;
    }
    case "headings": {
      return <ContextHookPage></ContextHookPage>;
    }
    default: {
      throw Error("test");
    }
  }
}

function App() {
  const [selected, setSelected] = useState<string>("cart");
  const [color, setColor] = useState<string>("#e66465");

  const user = useUser();

  return (
    <UserProvider>
      <div>
        <h1>React</h1>
        <h2>{user.name}</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <TitleContext.Provider value={color}>
          <ColoredTitles />
        </TitleContext.Provider>
        <ul>
          <li>
            <button onClick={() => setSelected("cart")}>Cart</button>
          </li>
          <li>
            <button onClick={() => setSelected("headings")}>
              Heading Context
            </button>
          </li>
        </ul>
        <main>
          <Container selected={selected} />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
