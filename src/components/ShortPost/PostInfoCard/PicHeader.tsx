import { FC, ReactElement } from "react";

import "./pic-header.scss";

const PicHeader: FC = (): ReactElement => {
  return (
    <section className="pic__top">
      <div className="pic__top__author">
        <img src="" />
        <h3></h3>
      </div>
      <time className="pic__top__date"></time>
    </section>
  );
};

export default PicHeader;
