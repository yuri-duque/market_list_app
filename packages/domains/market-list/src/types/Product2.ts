import {BaseProduct} from "./BaseProduct";

export interface Product extends BaseProduct {
  price?: number;
  quantity?: number;
  addedAtCart?: boolean;
}
