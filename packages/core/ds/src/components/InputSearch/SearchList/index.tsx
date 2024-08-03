import React, {useEffect, useState} from "react";
import {FlatList} from "react-native";
import {Divisor} from "../../Divisor";
import * as S from "./styles";

export type InputSearchListProps<T> = {
  value: string;
  onSelectItem: (item: T) => void;
  dataKey: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  startTouch: number;
  maxHeight?: number;
};

const InputSearchList = <T,>({
  value,
  onSelectItem,
  dataKey,
  data,
  renderItem,
  startTouch,
  maxHeight,
}: InputSearchListProps<T>) => {
  const [showList, setShowList] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState<T>();

  useEffect(() => {
    setShowList(true);
  }, [startTouch]);

  useEffect(() => {
    filterList();
  }, [value]);

  const filterList = () => {
    if (!selectedItem || value !== (selectedItem as any)[dataKey]) {
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
    setSelectedItem(item);
    onSelectItem(item);
    setShowList(false);
  };

  if (!showList) return <></>;

  return (
    <S.Container maxHeight={maxHeight} style={{zIndex: 1}}>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
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
    </S.Container>
  );
};

export default InputSearchList;
