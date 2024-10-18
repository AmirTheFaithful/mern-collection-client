import { ReactElement } from "react";

import PostInfoCard from "../../components/ShortPost/PostInfoCard";

import "./index.scss";

const user: UserInterface = {
  username: "John Doe",
  email: "john@gmail.com",
  avatarURL: "",
};

export default function HomePage(): ReactElement {
  return (
    <main id="page">
      <PostInfoCard user={user} />
    </main>
  );
}
