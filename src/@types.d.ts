declare interface IUser {
  username: string;
  email: string;
  avatarURL: string;
}

declare interface IComment {
  author: IUser; // Instead, should be the ID of the user
  content: string;
  publicationDate: Date;
  // Later, reactions list should be provided
}
