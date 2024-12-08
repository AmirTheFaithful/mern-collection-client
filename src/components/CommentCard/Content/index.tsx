import { FC, ReactElement } from "react";

const CommentCardContent: FC<{ content: string; loading: boolean }> = ({
  content,
  loading,
}): ReactElement => {
  return (
    <section className="comment-card__content">
      {loading ? <div className="content-skeleton"></div> : <p>{content}</p>}
    </section>
  );
};

export default CommentCardContent;
