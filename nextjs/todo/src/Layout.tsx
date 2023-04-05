import Navigation from "./components/navigation/navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black h-screen w-screen flex flex-grow-1">
      <main className="bg-[#22272e] w-full flex flex-grow-1">
        <Navigation />
        <div className="w-full bg-neutral-800">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
