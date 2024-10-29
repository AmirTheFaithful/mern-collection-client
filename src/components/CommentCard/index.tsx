import { FC, ReactElement } from "react";

import CommentCardHeader from "./Header";
import CommentCardContent from "./Content";
import CommentCardFooter from "../common/MediaCardFooter";

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
      <CommentCardFooter />
    </dialog>
  );
};

export default CommentCard;
