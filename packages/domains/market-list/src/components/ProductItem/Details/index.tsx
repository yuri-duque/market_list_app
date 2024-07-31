import {Spacing, Typography} from "@core/ds";
import {formatPrice} from "../../../utils";
import * as S from "./styles";
import {Product} from "../../../types";

export type ProductItemDetailsProps = {
  product: Product;
};

export const ProductItemDetails = ({product}: ProductItemDetailsProps) => {
  const qtd = product.quantity ?? 1;
  
  const getPriceFormated = (price?: number) => {
    const value = price ?? 0;
    return formatPrice(value * qtd);
  };

  return (
    <S.DetailsContainer>
      <Typography
        text={product.name}
        size="M"
        decotarion={product.addedAtCart ? "line-through" : "none"}
      />
      <Spacing size="XXS" />

      <S.PriceContainer>
        <Typography
          text={getPriceFormated(product.basePrice)}
          size={product.addedAtCart ? "XS" : "M"}
          color={"secondary"}
          decotarion={product.addedAtCart ? "line-through" : "none"}
        />
        {product.addedAtCart && (
          <Typography
            text={getPriceFormated(product.price)}
            size="M"
            color={product.addedAtCart ? "success" : "dark"}
          />
        )}
      </S.PriceContainer>
    </S.DetailsContainer>
  );
};
