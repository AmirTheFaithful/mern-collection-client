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
      <Content content="Hello, World!" />
      <Footer />
    </article>
  );
}
