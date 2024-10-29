import { FC, ReactElement, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useAppSelector } from "../../../store";
import { useThemeContext } from "../../../context/theme-ctx";
import { ModalsContext } from "../../../context/modals-ctx";
import CommentCard from "../../CommentCard";

import "./comments-modal.scss";

const CommentsModal: FC = (): ReactElement => {
  const { theme } = useThemeContext();
  const modal = useContext(ModalsContext).commentsModal;

  const comments = useAppSelector(
    (state): Array<IComment> => state.comments.comments
  );

  return (
    <article
      data-theme={theme}
      className={`comments-modal ${modal[0] ? "opened" : "closed"}`}
    >
      {/* <CommentCard /> */}
      <button
        className="comments-modal__close-btn"
        onClick={(): void => modal[1](false)}
      >
        <AiOutlineClose size={25} />
      </button>

      {/* Render all provided comments one by one. */}
      {comments.map(
        (comment: IComment, index: number): ReactElement => (
          <CommentCard comment={comment} key={index} />
        )
      )}
    </article>
  );
};

export default CommentsModal;
