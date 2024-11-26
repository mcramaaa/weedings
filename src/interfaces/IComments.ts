export interface IReplies {
  name?: string;
  userProfile?: string;
  content?: string;
  createdAt?: string;
}

export interface IComments {
  id?: number;
  name?: string;
  userProfile?: string;
  content?: string;
  weedingPathName?: string;
  createdAt?: string;
  replies?: IReplies[];
}
