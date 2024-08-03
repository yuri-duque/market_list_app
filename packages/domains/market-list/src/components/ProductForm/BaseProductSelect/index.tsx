import {useEffect, useState} from "react";
import {Text, View} from "react-native";
import Toast from "react-native-toast-message";
import {InputSearch, Typography, useLoading} from "@core/ds";
import {BaseProductService} from "../../../services";
import {BaseProduct, Product} from "../../../types";

type BaseProductSelectProps = {
  value: string;
  onChange: (value: string) => void;
  product?: Product;
  updateProduct: (product: Product) => void;
};

export const BaseProductSelect = ({
  value,
  onChange,
  product,
  updateProduct,
}: BaseProductSelectProps) => {
  const loading = useLoading();
  const baseProductService = new BaseProductService();

  const [baseProducts, setBaseProducts] = useState<BaseProduct[]>([]);

  useEffect(() => {
    getBaseProducts();
  }, []);

  const getBaseProducts = async () => {
    loading.setVisible(true);
    try {
      const products = await baseProductService.getAll();
      setBaseProducts(products);
    } catch (error: any) {
      Toast.show({type: "error", text1: "Error to get products."});
    } finally {
      loading.setVisible(false);
    }
  };

  const onSelectBaseProduct = (selectedProduct: BaseProduct) => {
    const newProduct = {
      ...selectedProduct,
      ...product,

      id: product?.id,
      baseProductId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
    };

    updateProduct(newProduct);
    onChange(selectedProduct.name);
  };

  return (
    <>
      <InputSearch<BaseProduct>
        value={value}
        onChange={onChange}
        onSelectItem={onSelectBaseProduct}
        dataKey={"name"}
        data={baseProducts}
        renderItem={item => (
          <View>
            <Typography text={item.name} color="secondary" weight="semiBold" />
          </View>
        )}
      />
    </>
  );
};
