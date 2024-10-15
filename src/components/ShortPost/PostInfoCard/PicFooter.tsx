import { FC, ReactElement } from "react";

import "./pic-footer.scss";

const PicFooter: FC = (): ReactElement => {
  return (
    <section className="pic__footer">
      <button className="pic__footer__like-btn"></button>
      <button className="pic__foter__open-btn"></button>
    </section>
  );
};

export default PicFooter;
