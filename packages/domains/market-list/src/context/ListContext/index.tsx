import React, {createContext, useContext, useEffect, useState} from "react";
import {useLoading} from "@core/ds";
import {ProductListService} from "../../services";
import {Product} from "../../types";

interface ListContextProps {
  listId: string;
  setListId: (listId: string) => void;
  getProducts: () => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const ListContext = createContext<ListContextProps>({
  listId: "",
  setListId: () => {},
  getProducts: () => {},
  products: [],
  setProducts: () => {},
});

export const ListProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const loading = useLoading();
  const [listId, setListId] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, [listId]);

  const getProducts = async () => {
    loading.setVisible(true);
    try {
      const productListService = new ProductListService(listId);
      const savedProducts = await productListService.getAll();
      const sortedProducts = orderProducts(savedProducts);
      setProducts(sortedProducts);
    } finally {
      loading.setVisible(false);
    }
  };

  const orderProducts = (products: Product[]) => {
    const productsOnCart = products.filter(product => product.addedToCart);
    const productsOnList = products.filter(product => !product.addedToCart);

    return [...productsOnList, ...productsOnCart];
  };

  return (
    <ListContext.Provider
      value={{listId, setListId, getProducts, products, setProducts}}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  return useContext(ListContext);
};
