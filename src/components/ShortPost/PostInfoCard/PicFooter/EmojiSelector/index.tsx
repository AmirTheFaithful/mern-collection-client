import { FC, ReactElement, Dispatch, SetStateAction } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaHeart, FaAngry, FaLaugh, FaSadTear } from "react-icons/fa";

import "./emoji-selector.scss";

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

export default EmojiSelector;
