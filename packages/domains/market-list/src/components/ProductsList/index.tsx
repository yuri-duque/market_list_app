import {useEffect, useState} from "react";
import {ScrollView} from "react-native";
import {Spacing, useLoading} from "@core/ds";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {ProductItem} from "../ProductItem";
import {ProductListHeader} from "./Header";
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
    const productsOnCart = products.filter(product => product.addedToCart);
    const productsOnList = products.filter(product => !product.addedToCart);

    return [...productsOnList, ...productsOnCart];
  };

  return (
    <S.Container>
      <ProductListHeader products={products} />

      <ScrollView>
        <S.ListContainer>
          <Spacing size="XS" />
          {products.map(product => (
            <ProductItem
              key={product.id}
              listId={listId}
              product={product}
              refreshList={getProducts}
            />
          ))}
          <Spacing size="XS" />
        </S.ListContainer>
      </ScrollView>
    </S.Container>
  );
};
