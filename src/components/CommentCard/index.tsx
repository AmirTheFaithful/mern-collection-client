import { FC, ReactElement } from "react";

import CommentCardHeader from "./Header";
import CommentCardContent from "./Content";

import "./comment-card.scss";

const CommentCard: FC<{ comment: IComment }> = ({ comment }): ReactElement => {
  return (
    <dialog className="comment-card">
      <CommentCardHeader
        avatarURL={comment.author.avatarURL}
        avatarAlt={comment.author.username}
        date={comment.publicationDate}
      />
      <CommentCardContent content={comment.content} />
    </dialog>
  );
};

export default CommentCard;
