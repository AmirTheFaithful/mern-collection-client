import { FC, ReactElement } from "react";

interface Props {
  avatarURL?: string;
  username?: string;
  date: Date;
  loading: boolean;
}

const CommentCardHeader: FC<Props> = ({
  avatarURL,
  username,
  date,
  loading,
}): ReactElement => {
  date = new Date(date);

  return (
    <div className="comment-card__header">
      <div className="comment-card__header__user-info">
        {loading ? (
          <div className="avatar-skeleton"></div>
        ) : (
          <img
            src={
              avatarURL
                ? avatarURL
                : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1731181322~exp=1731184922~hmac=b9d87f8edb29fb61c08f93b258198af60823956579aaff63a2fff7013a312c54&w=1380"
            }
            alt={`${username}'s avatar.`}
          />
        )}
        {loading ? (
          <div className="username-skeleton"></div>
        ) : (
          <h2>{username}</h2>
        )}
      </div>

      <time>{`on ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</time>
    </div>
  );
};

export default CommentCardHeader;
