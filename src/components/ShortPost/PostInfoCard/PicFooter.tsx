import { FC, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { FaCommentDots, FaRegCommentDots } from "react-icons/fa";

import likeSound from "../../../assets/audio/finger-snap.mp3";
import "./pic-footer.scss";

const PicFooter: FC = (): ReactElement => {
  // Localisation hook
  const { t } = useTranslation();

  return (
    <section className="pic__footer">
      <LikeButton />
      <CommentsButton />
      <button className="pic__footer__open-btn">
        {t("postInfoCard.visit")}
      </button>
    </section>
  );
};

const LikeButton: FC = (): ReactElement => {
  const [liked, setLiked] = useState<boolean>(false);
  // Initialise like button sound effect
  const audio = new Audio(likeSound);

  return (
    <button
      className="pic__footer__like-btn"
      onClick={(): void => {
        setLiked(!liked);
        audio.play();
      }}
    >
      {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
    </button>
  );
};

const CommentsButton: FC = (): ReactElement => {
  return (
    <button className="pic__footer__comments-btn">
      <FaRegCommentDots size={20} />
    </button>
  );
};

// Later should be a common element
const Badge: FC<{ count: number }> = ({ count }): ReactElement => {
  return <p className="badge">{count}</p>;
};

export default PicFooter;
