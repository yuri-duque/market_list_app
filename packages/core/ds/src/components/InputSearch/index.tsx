import React, {useEffect, useState} from "react";
import {Keyboard, ScrollView} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {Divisor} from "../Divisor";
import {Input} from "../Input";
import * as S from "./styles";

type InputSearchProps<T> = {
  value: string;
  onChange: (text: string) => void;
  onSelectItem: (item: T) => void;
  dataKey: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  maxHeight?: number;
};

export const InputSearch = <T extends object>({
  value,
  onChange,
  onSelectItem,
  data,
  dataKey,
  renderItem,
  maxHeight,
}: InputSearchProps<T>) => {
  const [showList, setShowList] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState<T>();

  useEffect(() => {
    filterList();
  }, [value]);

  const valueEqualsSelectedItem = () => {
    return selectedItem && value === (selectedItem as any)[dataKey];
  };

  const filterList = () => {
    if (value && !valueEqualsSelectedItem()) {
      const filtered = data.filter(item => {
        const itemValue = (item as any)[dataKey].toString().toLowerCase();
        return itemValue.includes(value.toLowerCase());
      });

      if (filtered.length === 0) {
        setShowList(false);
      } else {
        setShowList(true);
      }

      setFilteredData(filtered);
    } else {
      setShowList(false);
    }
  };

  const handleSelectItem = (item: T) => {
    Keyboard.dismiss();
    setSelectedItem(item);
    onSelectItem(item);
    setShowList(false);
  };

  return (
    <S.Container>
      <Input
        value={value}
        onChangeText={onChange}
        iconProps={{
          name: showList ? "chevron-up" : "chevron-down",
          iconSize: "L",
          color: "secondary",
        }}
      />

      {value && showList && (
        <S.ListContainer maxHeight={maxHeight} style={{zIndex: 1}}>
          <FlatList
            data={filteredData}
            keyExtractor={item => (item as any)[dataKey]}
            keyboardShouldPersistTaps="always"
            renderItem={({item, index}) => (
              <>
                <S.ListItemContainer onPress={() => handleSelectItem(item)}>
                  {renderItem(item)}
                </S.ListItemContainer>
                {index !== filteredData.length - 1 && (
                  <S.DivisorContainer>
                    <Divisor />
                  </S.DivisorContainer>
                )}
              </>
            )}
          />
        </S.ListContainer>
      )}
    </S.Container>
  );
};
