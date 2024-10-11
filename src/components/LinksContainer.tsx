import { ReactElement, FC } from "react";
import { NavLink } from "react-router-dom";

import { useThemeContext } from "../context/theme-ctx";
import ThemeSwitcher from "./ThemeSwitcher";

import "./links-container.scss";

const LinksContainer: FC = (): ReactElement => {
  const { theme } = useThemeContext();

  const linkClass = (isActive: boolean) =>
    isActive ? `active-${theme}` : `reg-link-${theme}`;

  return (
    <div className="links-container">
      <ThemeSwitcher />
      <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>
        Projects
      </NavLink>
    </div>
  );
};

export default LinksContainer;
