import {Page} from "@core/ds";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ProductForm} from "../../components";
import {useListContext} from "../../context";
import {MarketStackParamList} from "../../routes";

interface Props
  extends NativeStackScreenProps<MarketStackParamList, "AddProduct"> {}

export const AddProductScreen = ({route, navigation}: Props) => {
  const {listId} = route.params;
  const {getProducts} = useListContext();

  const onSubmit = () => {
    getProducts();
    navigation.navigate("List");
  };

  return (
    <Page hasHeader>
      <ProductForm listId={listId} formType={"save"} onSubmit={onSubmit} />
    </Page>
  );
};
