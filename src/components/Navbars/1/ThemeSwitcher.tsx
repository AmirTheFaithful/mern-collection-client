import { FC, ReactElement, useState, ChangeEventHandler } from "react";

import { useThemeContext } from "../../../context/theme-ctx";

import "./theme-switcher.scss";

const ThemeSwitcher: FC = (): ReactElement => {
  const { theme, setTheme } = useThemeContext();
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");

  const handleChange: ChangeEventHandler = (): void => {
    if (theme === "light") {
      setIsDark(true);
      setTheme("dark");
    } else {
      setIsDark(false);
      setTheme("light");
    }
  };

  return (
    <div className={`theme-switcher toggle-${theme}`}>
      <input
        type="checkbox"
        id="check"
        className="theme-switcher-toggle"
        checked={isDark}
        onChange={handleChange}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

export default ThemeSwitcher;
