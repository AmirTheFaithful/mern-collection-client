declare interface IUser {
  username: string;
  email: string;
  avatarURL: string;
}

declare interface IComment {
  authorID: string;
  content: string;
  publicationDate: Date;
  // Later, reactions list should be provided
}
