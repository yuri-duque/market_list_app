import {useState} from "react";
import {FlatList, View} from "react-native";
import {TouchableOpacity} from "@gorhom/bottom-sheet";
import {Card} from "../Card";
import {Divisor} from "../Divisor";
import {Input} from "../Input";
import {InputProps} from "../Input/types";
import {Spacing} from "../Spacing/styles";
import {Typography} from "../Typography";
import * as S from "./styles";

type InputSearchProps = {
  value: string;
  onChange: (text: string) => void;
  data: string[] | any[];
  dataKey?: string;
  onSearch: (value: string) => void;
  onItemClick: (item: any) => void;
  maxHeight?: number;
  inputProps: Omit<InputProps, "value" | "onChangeText">;
};

export const InputSearch = ({
  value,
  onChange,
  data,
  dataKey,
  onSearch,
  onItemClick,
  maxHeight,
  inputProps,
}: InputSearchProps) => {
  const [inputHeight, setInputHeight] = useState(40);
  const onChangeValue = (value: string) => {
    onSearch(value);
    onChange(value);
  };

  const getText = (item: any) => {
    if (typeof item === "string") {
      return item;
    }

    if (dataKey) {
      return item[dataKey];
    }
  };

  return (
    <S.InputContainer>
      <View
        onLayout={event => {
          setInputHeight(event.nativeEvent.layout.height);
        }}>
        <Input value={value} onChangeText={onChangeValue} {...inputProps} />
      </View>

      <S.ListContainer top={inputHeight} maxHeight={maxHeight}>
        {data && data.length !== 0 && (
          <>
            <Card>
              <S.CardContent>
                <FlatList
                  data={data}
                  renderItem={({item, index}) => {
                    const isFrst = index === 0;
                    const isLast = index === data.length - 1;
                    return (
                      <>
                        <TouchableOpacity onPress={() => onItemClick(item)}>
                          {!isFrst && <Spacing size="XS" />}

                          <Typography
                            text={getText(item)}
                            size="S"
                            color="secondary"
                          />
                          {!isLast && <Spacing size="XS" />}
                        </TouchableOpacity>
                        {!isLast && <Divisor />}
                      </>
                    );
                  }}
                />
              </S.CardContent>
            </Card>
          </>
        )}
      </S.ListContainer>
    </S.InputContainer>
  );
};
