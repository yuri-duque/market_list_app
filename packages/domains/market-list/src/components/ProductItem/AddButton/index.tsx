import {useEffect, useRef} from "react";
import Toast from "react-native-toast-message";
import {Icon, Modal, Spacing, useLoading} from "@core/ds";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {ProductListService} from "../../../services";
import {ProductForm, ProductFormFields} from "../../ProductForm";
import {ProductItemProps} from "../types";
import * as S from "./styles";

export const ProductItemAddButton = ({
  listId,
  product,
  refreshList,
}: ProductItemProps) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const openModal = () => {
    modalRef.current?.present();
  };

  const onCloseModal = () => {
    modalRef.current?.forceClose();
    modalRef.current?.dismiss();
    refreshList();
  };

  const onRemoveProductFromCart = async () => {
    try {
      loading.setVisible(true);

      await productListService.update({
        ...product,
        addedAtCart: !product.addedAtCart,
      });
      refreshList();

      loading.setVisible(false);
    } catch (error) {
      Toast.show({type: "error", text1: "Error to add product on cart."});
    }
  };

  const onPress = async () => {
    if (product.addedAtCart) {
      await onRemoveProductFromCart();
    } else {
      openModal();
    }
  };

  return (
    <>
      <S.IconContainer added={product.addedAtCart} onPress={onPress}>
        <Icon
          name={product.addedAtCart ? "cart-arrow-up" : "cart-arrow-down"}
          iconSize={"XL"}
          color={product.addedAtCart ? "white" : "secondary"}
        />
      </S.IconContainer>

      <Modal modalRef={modalRef} snapPoints={"50%"}>
        <ProductForm
          listId={listId}
          product={product}
          onSubmit={onCloseModal}
          fields={[ProductFormFields.price, ProductFormFields.quantity]}
          addOnCart={true}
        />
        <Spacing size={"L"} />
      </Modal>
    </>
  );
};
