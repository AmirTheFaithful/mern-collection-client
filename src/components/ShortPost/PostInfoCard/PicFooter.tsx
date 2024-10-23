import { FC, ReactElement, useState, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import {
  FaCommentDots,
  FaRegCommentDots,
  FaHeart,
  FaRegHeart,
  FaRegAngry,
  FaAngry,
  FaRegLaugh,
  FaLaugh,
  FaRegSadTear,
  FaSadTear,
} from "react-icons/fa";

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
  const [reacted, setReacted] = useState<boolean>(false);
  const [icon, setIcon] = useState<any>(
    reacted ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />
  );
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Initialise like button sound effect
  const audio = new Audio(likeSound);

  return (
    <button
      className="pic__footer__like-btn"
      onClick={(): void => {
        setReacted(!reacted);
        audio.play();
      }}
      onMouseEnter={(): void => {
        setScrolled(true);
      }}
      onMouseLeave={(): void => {
        setScrolled(false);
      }}
    >
      {icon}
      <EmojiSelector state={scrolled} setIcon={setIcon} />
    </button>
  );
};

const EmojiSelector: FC<{
  state: boolean;
  setIcon: Dispatch<SetStateAction<any>>;
}> = ({ state, setIcon }): ReactElement => {
  return (
    <div
      className={`emoji-selector ${state ? "scrolled" : "hidden"}`}
      onClick={(): void => console.log("hi!")}
    >
      <AiFillLike
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<AiFillLike size={20} />)}
      />
      <AiFillDislike
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<AiFillDislike size={20} />)}
      />
      <FaHeart
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<FaHeart size={20} />)}
      />
      <FaAngry
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<FaAngry size={20} />)}
      />
      <FaLaugh
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<FaLaugh size={20} />)}
      />
      <FaSadTear
        className="emoji-selector__icon"
        size={20}
        onClick={(): void => setIcon(<FaSadTear size={20} />)}
      />
    </div>
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
