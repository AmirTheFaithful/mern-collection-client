import { ReactElement } from "react";

import { useThemeContext } from "../../../context/theme-ctx";
import Logo from "./Logo";
import LinksContainer from "./LinksContainer";

import "./navbar.scss";

export default function Navbar(): ReactElement {
  const { theme } = useThemeContext();

  return (
    <nav className={`navbar nav-${theme}`}>
      <Logo />
      <LinksContainer />
    </nav>
  );
}
