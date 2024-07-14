import {FirestoreDocument} from "@core/integration";

export interface BaseProduct extends FirestoreDocument {
  name: string;
  description?: string;
  basePrice?: number;
  category?: string;
  subcategory?: string;
}
