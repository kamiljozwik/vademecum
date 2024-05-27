import type { DocumentData, Timestamp } from "firebase/firestore";

interface UserData extends DocumentData {
  email?: string;
  username?: string;
  photoURL?: string;
  bio?: string;
  joined?: number;
  stripeCustomerId?: string;
  admin?: boolean;
  subscriptions?: {
    [key: string]: string;
  };
  courses?: {
    [key: string]: string;
  };
  chapters?: {
    [key: string]: string;
  };
  progress?: {
    [key: string]: string[];
  };
}

interface Username extends DocumentData {
  uid: string;
}

export type UserCollection = {
  collection: "users";
  data: UserData;
};

export type UsernamesCollection = {
  collection: "usernames";
  data: Username;
};

export type RegistrationsCollection = {
  collection: "registrations";
  data: {
    email: string;
    format: "remote" | "on-site";
    trainingDate: string;
  };
};

export type BenchCollection = {
  collection: "$lib/servernch";
  data: {
    author: string;
    title: string;
    desc: string;
    chats: string[];
    createdAt: Timestamp;
  };
};

export type GeneralMessageCollection = {
  collection: "generalMessage";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export type Collection =
  | UserCollection
  | UsernamesCollection
  | RegistrationsCollection
  | BenchCollection
  | GeneralMessageCollection;
