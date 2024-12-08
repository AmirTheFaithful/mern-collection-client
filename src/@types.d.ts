declare interface IUser {
  username: string;
  email: string;
  avatarURL: string;
}

declare interface IComment {
  parentID?: string;
  authorID: string;
  media: {
    content: any;
    kind: string;
  };
  publicationDate: Date;
  // Later, reactions list should be provided
}
