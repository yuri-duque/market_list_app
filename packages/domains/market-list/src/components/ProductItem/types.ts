import {Product} from "../../types";

export type ProductItemProps = {
  listId: string;
  product: Product;
  refreshList: () => void;
};
