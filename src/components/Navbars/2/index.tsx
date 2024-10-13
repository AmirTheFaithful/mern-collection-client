import { ReactElement } from "react";

import { useThemeContext } from "../../../context/theme-ctx";
import Logo from "../Common/Logo";
import Links from "./Links";

import "./nav.scss";

export default (): ReactElement => {
  const { theme } = useThemeContext();

  return (
    <nav id="navbar" data-theme={theme} className={`nav nav-hidden`}>
      <Logo />
      <Links />
    </nav>
  );
};

window.addEventListener("scroll", (): void => {
  const navbar: HTMLElement | null = document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY <= 30) {
    navbar.classList.remove("nav-showing");
    navbar.classList.add("nav-hidden");
  }

  if (window.scrollY > 30) {
    navbar.classList.remove("nav-hidden");
    navbar.classList.add("nav-showing");
  }
});
