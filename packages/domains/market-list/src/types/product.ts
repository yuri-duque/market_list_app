import {FirestoreDocument} from "@core/integration";

export type Product = FirestoreDocument & {
  name: string;
  description: string;
  price: number;
  basePrice: number;
  category: string;
  subcategory: string;
};
