import { FC, ReactElement } from "react";

import "./pic-header.scss";

interface Props {
  authorAvatar: string;
  authorName: string;
  postDate: Date;
}

const PicHeader: FC<Props> = (props: Props): ReactElement => {
  return (
    <section className="pic__top">
      <div className="pic__top__author">
        <img src={props.authorAvatar} alt={`${props.authorName}'s avatar`} />
        <h3>{props.authorName}</h3>
      </div>
      <time className="pic__top__date">{props.postDate.toString()}</time>
    </section>
  );
};

export default PicHeader;
