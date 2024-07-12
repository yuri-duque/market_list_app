import {FirestoreDocument} from "@core/integration";

export type User = FirestoreDocument & {
  username: string;
  email: string;
  password: string;
};
