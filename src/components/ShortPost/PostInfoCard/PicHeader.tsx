import { FC, ReactElement } from "react";

import "./pic-header.scss";

const PicHeader: FC = (): ReactElement => {
  return (
    <section className="pic__top">
      <img src="" className="pic__top__avatar" />
      <h3 className="pic__top__username"></h3>
      <time className="pic__top__date"></time>
    </section>
  );
};

export default PicHeader;
