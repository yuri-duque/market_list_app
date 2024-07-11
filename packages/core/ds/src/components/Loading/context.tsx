import React, {createContext, useContext, useEffect} from "react";
import {Loading} from ".";
import {LoadingProps, LoadingType} from "./types";

export const LoadingContext = createContext<{
  visible: boolean;
  setVisible: (value: boolean, type?: LoadingType) => void;
}>({
  visible: false,
  setVisible: () => {},
});

let loading: LoadingProps = {
  type: "spin",
  visible: false,
  wrapped: false,
};

export const LoadingProvider: React.FC<{
  children: React.ReactNode;
  initialLoading?: LoadingProps;
}> = ({children, initialLoading = loading}) => {
  const [loadingData, setLoadingData] =
    React.useState<LoadingProps>(initialLoading);

  useEffect(() => {
    loading = {...loadingData};
  }, [loadingData]);

  return (
    <LoadingContext.Provider
      value={{
        visible: !!loadingData.visible,
        setVisible: (
          visible: boolean,
          typeLoading?: LoadingType,
          wrapped?: boolean,
        ) => {
          setLoadingData({
            type: typeLoading || "spin",
            visible,
            wrapped: !!wrapped,
          });
        },
      }}>
      {children}
      {loadingData.visible && (
        <Loading visible type={loadingData.type || "spin"} />
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
