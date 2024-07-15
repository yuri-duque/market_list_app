import {useCallback, useEffect, useRef, useState} from "react";
import {Button, Icon, Modal, useLoading} from "@core/ds";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {AddProductOnListModal} from "../AddProductOnListModal";
import {ProductItem} from "../ProductItem";
import * as S from "./styles";
import {ProductListProps} from "./types";

export const ProductList = ({listId}: ProductListProps) => {
  const modalAddProductOnList = useRef<BottomSheetModal>(null);

  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const [products, setProducts] = useState<Product[]>([]);

  const openModal = (ref: React.RefObject<BottomSheetModalMethods>) => {
    ref.current?.present();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const orderProducts = (products: Product[]) => {
    const productsOnCart = products.filter(product => product.addedAtCart);
    const productsOnList = products.filter(product => !product.addedAtCart);

    return [...productsOnList, ...productsOnCart];
  };

  const getProducts = async () => {
    loading.setVisible(true);

    const savedProducts = await productListService.getAll();
    const sortedProducts = orderProducts(savedProducts);
    setProducts(sortedProducts);

    loading.setVisible(false);
  };

  return (
    <BottomSheetModalProvider>
      <S.Container>
        <S.ListContainer>
          {products.map(product => (
            <ProductItem
              key={product.id}
              listId={listId}
              product={product}
              refreshList={getProducts}
            />
          ))}
        </S.ListContainer>
        <S.ButtonsContainer>
          <S.ButtonFinishList>
            <Button
              text="Finish"
              onPress={() => {}}
              color="success"
              icon="check-bold"
              textProps={{size: "L"}}
              iconProps={{size: "L"}}
            />
          </S.ButtonFinishList>

          <S.ButtonAddProduct onPress={() => openModal(modalAddProductOnList)}>
            <Icon name="plus" size="XL" color="white" />
          </S.ButtonAddProduct>
        </S.ButtonsContainer>
      </S.Container>

      <Modal modalRef={modalAddProductOnList} snapPoints={"50%"}>
        <AddProductOnListModal listId={listId} refreshList={getProducts} />
      </Modal>
    </BottomSheetModalProvider>
  );
};
