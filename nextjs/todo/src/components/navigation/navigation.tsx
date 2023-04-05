import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Connect from "../Connect";

const links = [
  {
    route: "/",
    icon: "material-symbols:home-outline",
  },
  {
    route: "/nodes",
    icon: "ic:baseline-network-check",
  },
  {
    route: "/fsfsdf",
    icon: "mdi:trash-can",
  },
];

export default function Navigation() {
  const elements = links.map((item) => (
    <li
      key={item.route}
      className="transition ease-in-out hover:bg-neutral-900 p-1 rounded-sm w-full flex items-center justify-center"
    >
      <Link to={item.route}>
        <Icon icon={item.icon} width="26" />
      </Link>
    </li>
  ));

  return (
    <div className="flex flex-col">
      <nav className="w-32 max-w-32 flex h-full flex-col">
        <div className="flex w-full p-3">
          <Connect />
        </div>
        <ul className="flex flex-col justify-center gap-4 h-full items-center w-full">
          {elements}
        </ul>
      </nav>
    </div>
  );
}
