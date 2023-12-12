export type ID = string;
export type Content = string;
export type Username = string;

export type UserProfile = {
  displayName: Username | null;
};
export type User = {
  uid: ID;
  profile: UserProfile;
};

export type TweetContent = {
  content: Content;
  createdAt: Date;
};

export type Tweet = {
  id: ID;
  content: TweetContent;
};

export type Tag = string;
