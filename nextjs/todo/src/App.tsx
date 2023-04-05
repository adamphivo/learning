import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/features/home/home";
import Nodes from "./components/features/nodes/nodes";
import NotFound from "./components/features/404";
import useConnect from "./hooks/useConnect";

function App() {
  useConnect();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nodes" element={<Nodes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
