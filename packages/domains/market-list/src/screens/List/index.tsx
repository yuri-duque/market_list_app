import {useEffect, useRef, useState} from "react";
import {Modal, Page, useLoading} from "@core/ds";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import {ProductList} from "../../components/ProductsList";
import {ProductListActions} from "../../components/ProductsList/Actions";
import {AddProductOnListModal} from "../../components/ProductsList/AddProductOnListModal";
import {ListService, ProductHistoryService} from "../../services";
import {List} from "../../types";

export const ListScreen = () => {
  const modalRef = useRef<BottomSheetModal>(null);
  const loading = useLoading();
  const listService = new ListService();

  const [list, setList] = useState<List | null>(null);
  const [updateList, setUpdateList] = useState<number>(0);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    loading.setVisible(true);
    const newList = await listService.start();
    setList(newList);
    loading.setVisible(false);
  };

  const openModal = () => {
    modalRef.current?.present();
  };

  const onCloseModal = () => {
    setUpdateList(updateList + 1);
    modalRef.current?.forceClose();
    modalRef.current?.dismiss();
  };

  const onFinishList = async () => {
    loading.setVisible(true);
    if (list && list.id) {
      await listService.finish(list.id);
    }
    loading.setVisible(false);
  };

  return (
    <Page noPadding>
      <BottomSheetModalProvider>
        {list && (
          <ProductList listId={list.id as string} updateList={updateList} />
        )}
        <ProductListActions
          onOpenModal={openModal}
          onFinishList={onFinishList}
        />

        <Modal modalRef={modalRef} snapPoints={"50%"}>
          <AddProductOnListModal
            listId={list?.id as string}
            onCloseModal={onCloseModal}
          />
        </Modal>
      </BottomSheetModalProvider>
    </Page>
  );
};
