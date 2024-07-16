import {Spacing, Typography} from "@core/ds";
import {Product} from "../../../types";
import {formatPrice} from "../../../utils";
import * as S from "./styles";

type ProductListHeaderProps = {
  products: Product[];
};

export const ProductListHeader = ({products}: ProductListHeaderProps) => {
  const calculateTotal = () => {
    let total = 0;

    const productsInCard = products.filter(product => product.addedAtCart);

    productsInCard.forEach(product => {
      total += product.price || 0;
    });

    return formatPrice(total);
  };

  return (
    <S.HeaderList>
      <Typography text="Total:" color="secondary" />
      <Spacing size="XS" />
      <Typography text={calculateTotal()} color="secondary" weight="bold" />
    </S.HeaderList>
  );
};
