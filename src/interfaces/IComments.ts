export interface IReplies {
  name: string;
  userProfile: string;
  content: string;
  createAt: string;
}

export interface IComments {
  id: number;
  name: string;
  userProfile: string;
  content: string;
  createdAt: string;
  replies: IReplies[];
}
