import { FC, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";

import clickSound from "../../../assets/audio/click.mp3";
import "./pic-footer.scss";

const PicFooter: FC = (): ReactElement => {
  const [liked, setLiked] = useState<boolean>(false);
  // The like button will temporarily play the famous click sound
  const audio = new Audio(clickSound);

  // Localisation hook
  const { t } = useTranslation();

  return (
    <section className="pic__footer">
      <button
        className="pic__footer__like-btn"
        onClick={(): void => {
          setLiked(!liked);
          audio.play();
        }}
      >
        {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
      </button>
      <button className="pic__footer__open-btn">
        {t("postInfoCard.visit")}
      </button>
    </section>
  );
};

export default PicFooter;
