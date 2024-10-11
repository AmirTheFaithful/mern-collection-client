import { ReactElement, FC } from "react";
import { NavLink } from "react-router-dom";

import "./logo.scss";

const Logo: FC = (): ReactElement => {
  return (
    <NavLink className="nav-logo" to="/">
      <img src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" />
    </NavLink>
  );
};

export default Logo;
