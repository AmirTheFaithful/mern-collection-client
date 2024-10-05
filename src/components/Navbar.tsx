import { ReactElement, FC } from "react";

import "./navbar.scss";

export default function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      a
      <LinksContainer />
    </nav>
  );
}

const LinksContainer: FC = (): ReactElement => {
  return (
    <div className="links-container">
      <a href="/">Home</a>
      <a href="/">Projects</a>
    </div>
  );
};
