import { ReactElement } from "react";

import PicHeader from "./PicHeader";

export default function PostInfoCard({
  user,
}: {
  user: UserInterface;
}): ReactElement {
  return (
    <article className="pic">
      <PicHeader />
    </article>
  );
}
