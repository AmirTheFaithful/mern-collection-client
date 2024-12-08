import {
  FC,
  ReactElement,
  useContext,
  useState,
  useEffect,
  MouseEventHandler,
} from "react";
import axios, { AxiosResponse } from "axios";
import { FaRegCommentDots } from "react-icons/fa";

import { ModalsContext } from "../../../context/modals-ctx";
import { useAppDispatch } from "../../../store";
import { addComments } from "../../../store/features/comments-slice";

const CommentsButton: FC = (): ReactElement => {
  const modal = useContext(ModalsContext).commentsModal;
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const handleClick: MouseEventHandler = (): void => {
    modal[1](true);
  };

  useEffect((): void => {
    const fetchComments = async (): Promise<void> => {
      try {
        // For now fetch all comments.
        const response: AxiosResponse = await axios.get(
          "http://localhost:8000/api/comments"
        );

        // Add fetched comments as whole array to the Redux store:
        dispatch(addComments(response.data.data));
      } catch (error: unknown) {
        setError(error as Error);
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    if (modal[0]) {
      fetchComments();
    }
    // Runs only once, since it's have no dependencies.
  }, []);

  return (
    <button className="media-card__footer__comments-btn" onClick={handleClick}>
      <FaRegCommentDots size={20} />
    </button>
  );
};

export default CommentsButton;
