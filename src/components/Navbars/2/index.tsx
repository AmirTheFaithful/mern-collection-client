import { ReactElement } from "react";

import { useThemeContext } from "../../../context/theme-ctx";
import Logo from "../../common/Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import NotificationsIcon from "./NotificationsIcon";
import Links from "./Links";

import "./nav.scss";

export default (): ReactElement => {
  const { theme } = useThemeContext();

  return (
    <nav id="navbar" data-theme={theme} className={`nav nav-showing`}>
      <Logo />
      <ThemeSwitcher />
      <NotificationsIcon />
      <Links />
    </nav>
  );
};

window.addEventListener("scroll", (): void => {
  const navbar: HTMLElement | null = document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY === 0) {
    navbar.classList.remove("nav-showing");
    navbar.classList.add("nav-hidden");
  }

  if (window.scrollY > 0) {
    navbar.classList.remove("nav-hidden");
    navbar.classList.add("nav-showing");
  }
});
