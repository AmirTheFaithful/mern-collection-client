import { FC, ReactElement, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import likeSound from "../../../assets/audio/finger-snap.mp3";
import EmojiSelector from "./EmojiSelector";

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
      className="media-card__footer__like-btn"
      onClick={async (): Promise<void> => {
        setReacted(!reacted);
        await audio.play();
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

export default LikeButton;
