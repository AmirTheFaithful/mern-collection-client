import { FC, ReactElement } from "react";

const CommentCardContent: FC<{ content: string }> = ({
  content,
}): ReactElement => {
  return (
    <section className="comment-card__content">
      <p>{content}</p>
    </section>
  );
};

export default CommentCardContent;
