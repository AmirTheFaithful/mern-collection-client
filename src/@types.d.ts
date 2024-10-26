declare interface UserInterface {
  username: string;
  email: string;
  avatarURL: string;
}

declare interface CommentInterface {
  author: string; // Actually it's the ID of the user
  content: string;
  // Later, reactions list should be provided
}
