import {useEffect, useRef, useState} from "react";
import {Modal, Page, useLoading} from "@core/ds";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {ProductList} from "../../components/ProductsList";
import {ProductListActions} from "../../components/ProductsList/Actions";
import {ListService} from "../../services";
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
      setList(null);
      await listService.finish(list.id);
    }
    loading.setVisible(false);
    init();
  };

  return (
    <Page noPadding>
      {list && (
        <>
          <ProductList listId={list.id as string} updateList={updateList} />
          <ProductListActions
            listId={list.id as string}
            onFinishList={onFinishList}
          />
        </>
      )}
    </Page>
  );
};
