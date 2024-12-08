import { FC, ReactElement } from "react";

import "./pic-header.scss";

interface Props {
  authorAvatarURL: string;
  authorName: string;
  postDate: Date;
}

const PicHeader: FC<Props> = (props: Props): ReactElement => {
  return (
    <section className="pic__header">
      <div className="pic__header__author">
        <img src={props.authorAvatarURL} alt={`${props.authorName}'s avatar`} />
        <h3>{props.authorName}</h3>
      </div>
      <time className="pic__header__date">{`${props.postDate.getDate()}/${props.postDate.getMonth()}/${props.postDate.getFullYear()}`}</time>
    </section>
  );
};

export default PicHeader;
