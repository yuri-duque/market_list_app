import {useEffect, useState} from "react";
import {View} from "react-native";
import {Spacing, Typography} from "@core/ds";
import {useListContext} from "../../context/ListContext";
import {formatPrice} from "../../utils";

export const MarketListTotalValue = () => {
  const {products} = useListContext();
  const [total, setTotal] = useState<string>();

  useEffect(() => {
    calculateTotal();
  }, [products]);

  const calculateTotal = () => {
    let total = 0;

    const productsInCard = products.filter(product => product.addedToCart);

    productsInCard.forEach(product => {
      total += (product.price || 0) * (product.quantity || 1);
    });

    const price = formatPrice(total);
    setTotal(price);
  };

  if (!total) return <View />;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 12,
      }}>
      <Typography text="Total:" color="secondary" />
      <Spacing size="XS" />
      <Typography text={total} color="secondary" weight="bold" />
    </View>
  );
};
