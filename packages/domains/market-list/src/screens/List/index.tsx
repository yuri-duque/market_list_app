import {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {Page, useLoading} from "@core/ds";
import {ProductList} from "../../components/ProductsList";
import {ListService} from "../../services";
import {List} from "../../types";

export const ListScreen = () => {
  const loading = useLoading();
  const listService = new ListService();

  const [list, setList] = useState<List | null>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    loading.setVisible(true);
    const newList = await listService.start();
    setList(newList);
    loading.setVisible(false);
  };

  return <Page>{list && <ProductList listId={list.id as string} />}</Page>;
};
