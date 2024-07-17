import React, {useState} from "react";
import {Input, Page, Spacing} from "@core/ds";
import {InputSearch} from "@core/ds/src";

export const HomeScreen = () => {
  const [value, onChangeText] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  const products = [
    "batata",
    "batata doce",
    "batata frita",
    "batata assada",
    "feijão",
    "feijão preto",
    "feijão branco",
    "arroz",
    "arroz integral",
    "arroz branco",
  ];

  const onFilterProducts = (value: string) => {
    if (value) {
      const filtered = products.filter(product =>
        product.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <Page>
      <Input value={""} onChangeText={onChangeText} />
      <Spacing size="XS" />
      <InputSearch
        value={value}
        onChange={onChangeText}
        data={filteredProducts}
        onSearch={onFilterProducts}
        onItemClick={value => {}}
        inputProps={{label: "name"}}
      />
      <Spacing size="XS" />
      <Input value={value} onChangeText={onChangeText} />
    </Page>
  );
};
