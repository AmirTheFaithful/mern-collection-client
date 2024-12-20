import { FC, ReactElement, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import CommentCardHeader from "./Header";
import CommentCardContent from "./Content";
import CommentCardFooter from "../common/MediaCardFooter";

import "./comment-card.scss";

const CommentCard: FC<{ comment: IComment }> = ({ comment }): ReactElement => {
  const [author, setAuthor] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      setLoading(true);

      try {
        const user: AxiosResponse = await axios.get(
          `http://localhost:8000/api/users/${comment.authorID}`
        );

        setAuthor(user.data.data);
      } catch (error: unknown) {
        setError(error as Error);
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [comment.authorID]);

  return (
    <article className="comment-card">
      <CommentCardHeader
        avatarURL={author?.avatarURL}
        username={author?.username}
        date={comment.publicationDate}
        loading={loading}
      />
      <CommentCardContent content={comment.media.content} loading={loading} />
    </article>
  );
};

export default CommentCard;
