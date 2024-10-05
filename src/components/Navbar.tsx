import { ReactElement, FC, ReactNode } from "react";

import "./navbar.scss";

export default function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <Bg />
    </nav>
  );
}

const Bg: FC = (): ReactElement => {
  return <div className="scene"></div>;
};
