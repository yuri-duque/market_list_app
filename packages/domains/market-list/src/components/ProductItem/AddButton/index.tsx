import {useRef} from "react";
import {Keyboard} from "react-native";
import Toast from "react-native-toast-message";
import {Icon, Modal, Spacing, useLoading} from "@core/ds";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useListContext} from "../../../context";
import {ProductListService} from "../../../services";
import {Product} from "../../../types";
import {ProductForm} from "../../ProductForm";
import * as S from "./styles";

type ProductItemAddButtonProps = {
  product: Product;
};

export const ProductItemAddButton = ({product}: ProductItemAddButtonProps) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const loading = useLoading();
  const {listId, getProducts} = useListContext();

  const openModal = () => {
    modalRef.current?.present();
  };

  const onCloseModal = () => {
    Keyboard.dismiss();
    modalRef.current?.close();
    getProducts();
  };

  const onRemoveProductFromCart = async () => {
    loading.setVisible(true);
    try {
      const productListService = new ProductListService(listId);
      await productListService.update({
        ...product,
        addedToCart: !product.addedToCart,
      });
      getProducts();
    } catch (error) {
      Toast.show({type: "error", text1: "Error to add product on cart."});
    } finally {
      loading.setVisible(false);
    }
  };

  const onPress = async () => {
    if (product.addedToCart) {
      await onRemoveProductFromCart();
    } else {
      openModal();
    }
  };

  return (
    <>
      <S.IconContainer added={product.addedToCart} onPress={onPress}>
        <Icon
          name={product.addedToCart ? "cart-arrow-up" : "cart-arrow-down"}
          iconSize={"XL"}
          color={product.addedToCart ? "white" : "secondary"}
        />
      </S.IconContainer>

      <Modal modalRef={modalRef} snapPoints={"50%"}>
        <ProductForm
          listId={listId}
          product={product}
          onSubmit={onCloseModal}
          formType="addToCart"
        />
        <Spacing size={"L"} />
      </Modal>
    </>
  );
};
