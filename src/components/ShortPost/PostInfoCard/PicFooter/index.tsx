import { FC, ReactElement } from "react";

import LikeButton from "./LikeButton";
import CommentsButton from "./CommentsButton";
import VisitButton from "./VisitButton";

import "./pic-footer.scss";

const PicFooter: FC = (): ReactElement => {
  return (
    <section className="pic__footer">
      <LikeButton />
      <CommentsButton />
      <VisitButton />
    </section>
  );
};

export default PicFooter;
