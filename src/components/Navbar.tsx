import { ReactElement, FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { useThemeContext } from "../context/theme-ctx";

import "./navbar.scss";

export default function Navbar(): ReactElement {
  handlePageScroll();
  const { theme } = useThemeContext();

  return (
    <nav className={`navbar hidden nav-${theme}`}>
      <Icon />
      <LinksContainer />
    </nav>
  );
}

const Icon: FC = (): ReactElement => {
  return (
    <NavLink className="nav-logo" to="/">
      <img src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" />
    </NavLink>
  );
};

const LinksContainer: FC = (): ReactElement => {
  return (
    <div className="links-container">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  );
};

const handlePageScroll = (): void => {
  window.addEventListener("scroll", (): void => {
    const navbar: HTMLElement | null = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY < 30) {
      navbar.classList.remove("showing");
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
      navbar.classList.add("showing");
    }
  });
};
