import {useEffect, useState} from "react";
import {Page, useLoading} from "@core/ds";
import {useIsFocused} from "@react-navigation/native";
import {ProductList} from "../../components/ProductsList";
import {ProductListActions} from "../../components/ProductsList/Actions";
import {useListContext} from "../../context/ListContext";
import {ListService} from "../../services";
import {List} from "../../types";

export const ListScreen = () => {
  const loading = useLoading();
  const listService = new ListService();
  const {setListId, getProducts} = useListContext();

  const [list, setList] = useState<List | undefined>();
  const [updateList, setUpdateList] = useState<number>(0);

  useEffect(() => {
    init();
  }, []);

  const focused = useIsFocused();

  useEffect(() => {
    setUpdateList(updateList + 1);
  }, [focused]);

  const init = async () => {
    loading.setVisible(true);
    try {
      const newList = await listService.start();
      setListId(newList.id as string);
      setList(newList);
    } finally {
      loading.setVisible(false);
    }
  };

  const onFinishList = async () => {
    loading.setVisible(true);
    try {
      setList(undefined);
      if (list && list.id) {
        await listService.finish(list.id);
      }
      getProducts();
    } finally {
      loading.setVisible(false);
      init();
    }
  };

  return (
    <Page noPadding>
      {list && (
        <>
          <ProductList />
          <ProductListActions
            listId={list.id as string}
            onFinishList={onFinishList}
          />
        </>
      )}
    </Page>
  );
};
