import {ScrollView} from "react-native";
import {Spacing} from "@core/ds";
import {useListContext} from "../../context/ListContext";
import {ProductItem} from "../ProductItem";
import * as S from "./styles";

export const ProductList = () => {
  const {products} = useListContext();

  return (
    <S.Container>
      <ScrollView>
        <S.ListContainer>
          <Spacing size="XS" />
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
          <Spacing size="XS" />
        </S.ListContainer>
      </ScrollView>
    </S.Container>
  );
};
