import {FirestoreDocument} from "@core/integration";

export interface BaseProduct extends FirestoreDocument {
  name: string;
  baseProductId?: string;
  basePrice?: number;
  category?: string;
  subcategory?: string;
}
