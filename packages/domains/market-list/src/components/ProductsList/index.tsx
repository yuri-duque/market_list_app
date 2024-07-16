import {useEffect, useState} from "react";
import {useLoading} from "@core/ds";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {ProductListList} from "./List";
import * as S from "./styles";

export type ProductListProps = {
  listId: string;
  updateList: number;
};

export const ProductList = ({listId, updateList}: ProductListProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, [updateList]);

  const getProducts = async () => {
    loading.setVisible(true);

    const savedProducts = await productListService.getAll();
    const sortedProducts = orderProducts(savedProducts);
    setProducts(sortedProducts);

    loading.setVisible(false);
  };

  const orderProducts = (products: Product[]) => {
    const productsOnCart = products.filter(product => product.addedAtCart);
    const productsOnList = products.filter(product => !product.addedAtCart);

    return [...productsOnList, ...productsOnCart];
  };

  return (
    <S.Container>
      <ProductListList
        listId={listId}
        products={products}
        getProducts={getProducts}
      />
    </S.Container>
  );
};
