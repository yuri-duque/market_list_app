import {useEffect, useRef, useState} from "react";
import {Modal, Page, useLoading} from "@core/ds";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import {ProductList} from "../../components/ProductsList";
import {ProductListActions} from "../../components/ProductsList/Actions";
import {AddProductOnListModal} from "../../components/ProductsList/AddProductOnListModal";
import {ListService} from "../../services";
import {List} from "../../types";

export const ListScreen = () => {
  const modalAddProductOnList = useRef<BottomSheetModal>(null);
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

  const openModal = (ref: React.RefObject<BottomSheetModalMethods>) => {
    ref.current?.present();
  };

  const onCloseModal = (ref: React.RefObject<BottomSheetModalMethods>) => {
    if (ref === modalAddProductOnList) {
      setUpdateList(updateList + 1);
    }

    ref.current?.forceClose();
    ref.current?.dismiss();
  };

  return (
    <Page noPadding>
      <BottomSheetModalProvider>
        {list && (
          <ProductList listId={list.id as string} updateList={updateList} />
        )}
        <ProductListActions
          listId={list?.id as string}
          modalRef={modalAddProductOnList}
          onOpenModal={() => openModal(modalAddProductOnList)}
        />

        <Modal modalRef={modalAddProductOnList} snapPoints={"50%"}>
          <AddProductOnListModal
            listId={list?.id as string}
            onCloseModal={() => {
              onCloseModal(modalAddProductOnList);
            }}
          />
        </Modal>
      </BottomSheetModalProvider>
    </Page>
  );
};
