import { FC, ReactElement, useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa";

import { ModalsContext } from "../../../../context/modals-ctx";

const CommentsButton: FC = (): ReactElement => {
  const modal = useContext(ModalsContext).commentsModal;

  return (
    <button
      className="pic__footer__comments-btn"
      onClick={(): void => modal[1](true)}
    >
      <FaRegCommentDots size={20} />
    </button>
  );
};

export default CommentsButton;
