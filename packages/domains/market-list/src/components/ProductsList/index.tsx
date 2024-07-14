import {useEffect, useState} from "react";
import {Button, Icon, useLoading} from "@core/ds";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {ProductItem} from "../ProductItem";
import * as S from "./styles";
import {ProductListProps} from "./types";

export const ProductList = ({listId}: ProductListProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const orderProducts = (products: Product[]) => {
    const productsOnCart = products.filter(product => product.addedAtCart);
    const productsOnList = products.filter(product => !product.addedAtCart);

    return [...productsOnList, ...productsOnCart];
  };

  const getProducts = async () => {
    loading.setVisible(true);

    const savedProducts = await productListService.getAll();
    const sortedProducts = orderProducts(savedProducts);
    setProducts(sortedProducts);

    loading.setVisible(false);
  };

  return (
    <S.Container>
      <S.ListContainer>
        {products.map(product => (
          <ProductItem
            key={product.id}
            listId={listId}
            product={product}
            refreshList={getProducts}
          />
        ))}
      </S.ListContainer>
      <S.ButtonsContainer>
        <S.ButtonFinishList>
          <Button text="Finish" onPress={() => {}} />
        </S.ButtonFinishList>
        <S.ButtonAddProduct onPress={() => {}}>
          <Icon name="plus" size="XL" color="white" />
        </S.ButtonAddProduct>
      </S.ButtonsContainer>
    </S.Container>
  );
};
