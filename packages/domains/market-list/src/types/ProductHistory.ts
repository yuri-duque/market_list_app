import {FirestoreDocument} from "@core/integration";

export interface ProductHistory extends FirestoreDocument {
  price: number;
  quantity: number;
}
