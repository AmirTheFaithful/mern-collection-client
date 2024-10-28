import { FC, ReactElement } from "react";

import LikeButton from "./LikeButton";
import CommentsButton from "./CommentsButton";
import VisitButton from "./VisitButton";

import "./media-card-footer.scss";

const MediaCardFooter: FC = (): ReactElement => {
  return (
    <section className="media-card__footer">
      <LikeButton />
      <CommentsButton />
      <VisitButton />
    </section>
  );
};

export default MediaCardFooter;
