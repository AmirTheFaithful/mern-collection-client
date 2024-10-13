import { ReactElement } from "react";

import Link from "./Link";

import "./links.scss";

export default (): ReactElement => {
  return (
    <div className={`nav-links`}>
      <Link url="/" title="Home" />
      <Link url="/projects" title="About Us" />
    </div>
  );
};
