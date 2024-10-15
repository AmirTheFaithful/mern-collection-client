import { FC, ReactElement } from "react";

import "./pic-content.scss";

const PicContent: FC<{ content: string }> = ({
  content,
}: {
  content: string;
}): ReactElement => {
  return (
    <section className="pic__content">
      <p>{content}</p>
    </section>
  );
};

export default PicContent;
