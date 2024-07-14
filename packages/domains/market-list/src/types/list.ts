import {FirestoreDocument} from "@core/integration";
import {Product} from "./product";

export type List = FirestoreDocument & {
  name: string;
  description: string;
  totalPrice: number;
  estimatedPrice: number;
  products: Product[];
};
