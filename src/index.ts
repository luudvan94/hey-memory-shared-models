export type ID = string;
export type Content = string;
export type Username = string;

export type User = {
  id: ID;
  userName: Username;
};

export type Tweet = {
  id: ID;
  content: Content;
  createdAt: Date;
};

export type Tag = string;
