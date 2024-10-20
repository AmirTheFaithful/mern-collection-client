import { ReactElement } from "react";

import { useThemeContext } from "../../../context/theme-ctx";

import Header from "./PicHeader";
import Content from "./PicContent";
import Footer from "./PicFooter";

import "./post-info-card.scss";

export default function PostInfoCard({
  user,
}: {
  user: UserInterface;
}): ReactElement {
  const { theme } = useThemeContext();

  /* Used temporary hard-coded value as props */
  return (
    <article className="pic" data-theme={theme}>
      <Header
        authorAvatarURL={user.avatarURL}
        authorName={user.username}
        postDate={new Date()}
      />
      <Content content="Just returned from an incredible trip to Kyiv! 🇺🇦 The stunning architecture of St. Sophia's Cathedral left me in awe, and wandering through the vibrant streets of Andriyivskyy Descent was a highlight. I also enjoyed a peaceful stroll in the expansive parks of the city, soaking in the rich history and culture. Can't wait to share more about my adventures in this beautiful city!" />
      <Footer />
    </article>
  );
}
