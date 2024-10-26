import { FC, ReactElement, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useThemeContext } from "../../../context/theme-ctx";
import { ModalsContext } from "../../../context/modals-ctx";
import CommentCard from "../../CommentCard";

import "./comments-modal.scss";

const CommentsModal: FC = (): ReactElement => {
  const { theme } = useThemeContext();
  const modal = useContext(ModalsContext).commentsModal;

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
    </article>
  );
};

export default CommentsModal;
