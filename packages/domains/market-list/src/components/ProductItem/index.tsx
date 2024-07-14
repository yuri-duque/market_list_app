import {Text, View} from "react-native";
import {ref} from "yup";
import {
  AppTheme,
  Card,
  Icon,
  Input,
  Spacing,
  Typography,
  useLoading,
} from "@core/ds";
import {ProductListService} from "../../services";
import {formatPrice} from "../../utils";
import {ProductItemActions} from "./Actions";
import {ProductItemAddButton} from "./AddButton";
import {ProductItemDetails} from "./Details";
import * as S from "./styles";
import {ProductItemProps} from "./types";

export const ProductItem = ({
  listId,
  product,
  refreshList,
}: ProductItemProps) => {
  return (
    <Card>
      <S.CardContent>
        <ProductItemAddButton
          listId={listId}
          product={product}
          refreshList={refreshList}
        />

        <ProductItemDetails product={product} />

        <ProductItemActions product={product} />
      </S.CardContent>
    </Card>
  );
};
