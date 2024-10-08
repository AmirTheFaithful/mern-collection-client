import { FC, ReactElement, ChangeEventHandler, useState } from "react";

interface Props {
  handleSwitch: ChangeEventHandler;
  isSwitched: boolean;
}

const ThemeSwitcher: FC<Props> = ({
  handleSwitch,
  isSwitched,
}): ReactElement => {
  return (
    <div className="theme-switcher">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-toggle"
        onChange={handleSwitch}
        checked={isSwitched}
      />
      <label htmlFor="theme-switch">Dark Mode</label>
    </div>
  );
};

export default ThemeSwitcher;
