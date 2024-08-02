import {useState} from "react";
import {Dimensions} from "react-native";
import {
  AutocompleteDropdown,
  AutocompleteDropdownItem,
} from "react-native-autocomplete-dropdown";
import {useTheme} from "styled-components/native";
import * as S from "./styles";

type InputSearchProps = {
  value: string;
  data: string[] | any[];
  onChange: (text: string) => void;
  onSelectItem: (item: any) => void;
};

const mapData = (data: string[]) => {
  const autoCompleteData: AutocompleteDropdownItem[] = [];

  data.forEach((item: any, index: number) => {
    autoCompleteData.push({
      id: item.id,
      title: item.name,
    });
  });

  return autoCompleteData;
};

export const InputSearch = ({
  value,
  data,
  onChange,
  onSelectItem,
}: InputSearchProps) => {
  const theme = useTheme();
  const styles = S.getStyle(theme);
  const defaultData = mapData(data);
  const [filteredData, setFilteredData] = useState(defaultData);
  const [selectedText, setSelectedText] = useState<string>();

  const onAutocompleteSelectItem = (item: AutocompleteDropdownItem | null) => {
    if (item) {
      setSelectedText(value);
      const itemData = data.find((dataItem: any) => dataItem.id === item.id);
      onSelectItem(itemData);
    }
  };

  const onFilter = (text: string) => {
    if (text !== selectedText) {
      setSelectedText(undefined);
      onChange(text);

      const filteredItems = defaultData.filter(item =>
        item.title?.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filteredItems);
    }
  };

  return (
    <AutocompleteDropdown
      initialValue={value}
      onChangeText={onFilter}
      dataSet={filteredData}
      onSelectItem={onAutocompleteSelectItem}
      caseSensitive={false}
      ignoreAccents={true}
      trimSearchText={true}
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
      inputContainerStyle={styles.input}
    />
  );
};
