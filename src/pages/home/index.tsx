import { ReactElement } from "react";

import PostInfoCard from "../../components/ShortPost/PostInfoCard";

import "./index.scss";
import Avatar from "../../assets/images/avatar.jpg";

const user: IUser = {
  username: "John Doe",
  email: "john@gmail.com",
  avatarURL: Avatar,
};

export default function HomePage(): ReactElement {
  return (
    <main id="page">
      <PostInfoCard user={user} />
    </main>
  );
}
