import {BaseProduct} from "./BaseProduct";

export interface Product extends BaseProduct {
  baseProductId?: string;
  price?: number;
  quantity?: number;
  addedAtCart?: boolean;
}
