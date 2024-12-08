import { ReactElement, useEffect, useState, MouseEventHandler } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

import { useThemeContext } from "../../../context/theme-ctx";

import clickSound from "../../../assets/audio/click.mp3";
import "./theme-switcher.scss";

export default (): ReactElement => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeSwitch = async (): Promise<void> => {
    const click = new Audio(clickSound);
    await click.play();

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-switcher">
      <p className="theme-switcher__toggle" onClick={handleThemeSwitch}>
        {theme === "dark" ? <FiSun size={10} /> : <FaMoon size={10} />}
      </p>
    </div>
  );
};
