import {useEffect, useRef, useState} from "react";
import {Page, useLoading} from "@core/ds";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useIsFocused} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ProductList} from "../../components/ProductsList";
import {ProductListActions} from "../../components/ProductsList/Actions";
import {MarketStackParamList} from "../../routes";
import {ListService} from "../../services";
import {List} from "../../types";

interface Props extends NativeStackScreenProps<MarketStackParamList, "List"> {}

export const ListScreen = ({route, navigation}: Props) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const loading = useLoading();
  const listService = new ListService();

  const [list, setList] = useState<List | null>(null);
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
      setList(newList);
    } finally {
      loading.setVisible(false);
    }
  };

  const onFinishList = async () => {
    loading.setVisible(true);
    try {
      if (list && list.id) {
        setList(null);
        await listService.finish(list.id);
      }
    } finally {
      loading.setVisible(false);
      init();
    }
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
