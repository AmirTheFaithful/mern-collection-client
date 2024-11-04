import { FC, ReactElement } from "react";

import "./comment-card-header.scss";

interface Props {
  avatarURL: string;
  avatarAlt: string;
  date: Date;
}

const CommentCardHeader: FC<Props> = ({
  avatarURL,
  avatarAlt,
  date,
}): ReactElement => {
  date = new Date(date);

  return (
    <div className="comment-card__header">
      <img src={avatarURL} alt={avatarAlt} />
      <time>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</time>
    </div>
  );
};

export default CommentCardHeader;
