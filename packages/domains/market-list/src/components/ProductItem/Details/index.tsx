import {Spacing, Typography} from "@core/ds";
import {formatPrice} from "../../../utils";
import * as S from "./styles";
import {ProductItemDetailsProps} from "./types";

export const ProductItemDetails = ({product}: ProductItemDetailsProps) => {
  const getPriceFormated = (price?: number) => {
    const value = price ?? 0;
    return formatPrice(value);
  };

  return (
    <S.DetailsContainer>
      <Typography text={product.name} size="S" />
      <Spacing size="XXS" />
      <Typography text={product.category} size="XS" color={"secondary"} />
      <Spacing size="S" />

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
