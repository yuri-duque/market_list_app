import {ScrollView} from "react-native";
import {Spacing} from "@core/ds";
import {Product} from "../../../types";
import {ProductItem} from "../../ProductItem";
import {ProductListHeader} from "../Header";
import * as S from "./styles";

export type ProductListListProps = {
  listId: string;
  products: Product[];
  getProducts: () => void;
};

export const ProductListList = ({
  listId,
  products,
  getProducts,
}: ProductListListProps) => {
  return (
    <>
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
    </>
  );
};
