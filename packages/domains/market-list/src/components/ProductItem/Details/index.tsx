import {Spacing, Typography} from "@core/ds";
import {Product} from "../../../types";
import {formatPrice} from "../../../utils";
import * as S from "./styles";

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
        decotarion={product.addedToCart ? "line-through" : "none"}
      />
      <Spacing size="XXS" />

      <S.PriceContainer>
        <Typography
          text={getPriceFormated(product.basePrice)}
          size={product.addedToCart ? "XS" : "M"}
          color={"secondary"}
          decotarion={product.addedToCart ? "line-through" : "none"}
        />
        {product.addedToCart && (
          <Typography
            text={getPriceFormated(product.price)}
            size="M"
            color={product.addedToCart ? "success" : "dark"}
          />
        )}
      </S.PriceContainer>
    </S.DetailsContainer>
  );
};
