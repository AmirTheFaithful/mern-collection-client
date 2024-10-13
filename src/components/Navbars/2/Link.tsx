import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import "./link.scss";

interface Props {
  url: string;
  title: string;
}

export default ({ url, title }: Props): ReactElement => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `nav-link ${isActive ? "nav-link-active" : "nav-link-inactive"}`
      }
    >
      {title}
    </NavLink>
  );
};
