import { ReactElement } from "react";

import Header from "./PicHeader";
import Content from "./PicContent";
import Footer from "./PicFooter";

export default function PostInfoCard({
  user,
}: {
  user: UserInterface;
}): ReactElement {
  /* Used temporary hard-coded value as props */
  return (
    <article className="pic">
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
