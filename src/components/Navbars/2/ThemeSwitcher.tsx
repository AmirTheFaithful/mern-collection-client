import { ReactElement, useState, MouseEventHandler } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

import { useThemeContext } from "../../../context/theme-ctx";

import clickSound from "../../../assets/audio/click.mp3";
import "./theme-switcher.scss";

export default (): ReactElement => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeSwitch: MouseEventHandler = async (event): Promise<void> => {
    event.preventDefault();

    const click = new Audio(clickSound);
    await click.play();

    toggleTheme();
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-switcher">
      <p className="toggle" onClick={handleThemeSwitch}>
        {theme === "dark" ? <FiSun size={16} /> : <FaMoon size={16} />}
      </p>
    </div>
  );
};
