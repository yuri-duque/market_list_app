import React from "react";
import {Input} from "../Input";
import InputSearchList, {InputSearchListProps} from "./SearchList";
import * as S from "./styles";

type InputSearchProps<T> = Omit<InputSearchListProps<T>, "setShowList"> & {
  onChange: (text: string) => void;
};

export const InputSearch = <T extends object>(props: InputSearchProps<T>) => {
  const {value, onChange} = props;
  const [startTouch, setStarttouch] = React.useState(0);

  const handleTouchStart = () => {
    setStarttouch(startTouch + 1);
  };

  return (
    <S.Container>
      <Input
        value={value}
        onChangeText={onChange}
        iconProps={{name: "chevron-up", iconSize: "L", color: "secondary"}}
        onTouchStart={handleTouchStart}
      />

      {value && <InputSearchList {...props} startTouch={startTouch} />}
    </S.Container>
  );
};
