import {FirestoreDocument} from "@core/integration";

export interface List extends FirestoreDocument {
  name: string;
  description?: string;
  totalPrice?: number;
  estimatedPrice?: number;
}
