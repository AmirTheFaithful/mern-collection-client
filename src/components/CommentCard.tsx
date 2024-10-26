import { FC, ReactElement } from "react";

const CommentCard: FC<{ comment: CommentInterface }> = ({
  comment,
}): ReactElement => {
  return (
    <dialog className="comment-card">
      <div className="comment-card__header">
        <img src="./author-avatar" alt="author-username" />
      </div>
    </dialog>
  );
};

export default CommentCard;
