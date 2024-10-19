import { FC, ReactElement, useState } from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";

import "./pic-footer.scss";

const PicFooter: FC = (): ReactElement => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <section className="pic__footer">
      <button
        className="pic__footer__like-btn"
        onClick={(): void => setLiked(!liked)}
      >
        {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
      </button>
      <button className="pic__footer__open-btn">Visit Profile</button>
    </section>
  );
};

export default PicFooter;
