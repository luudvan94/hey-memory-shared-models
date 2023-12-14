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

export type Tweet = {
  id: ID;
  content: Content;
  createdAt: Date;
  parentTweetId: ID | null;
  childCount: number;
};

export type Tag = string;
