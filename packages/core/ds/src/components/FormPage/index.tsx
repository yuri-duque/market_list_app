import React, {useEffect, useState} from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import {PageSafeArea} from "./SaveArea";
import * as S from "./styles";
import {FormPageProps} from "./types";

export const FormPage = ({
  noPadding = false,
  noSafeArea,
  children,
  footer,
}: FormPageProps) => {
  const {height} = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const [pageHeight, setPageHeight] = useState<number>(height);

  const [contentHeight, setContentHeight] = useState<number>(0);
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number | undefined>(
    undefined,
  );

  const setHeight = (
    event: LayoutChangeEvent,
    set: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    set(event.nativeEvent.layout.height);
  };

  const getScrollViewHeight = () => {
    const contentSize = contentHeight + footerHeight + headerHeight;

    if (contentSize > pageHeight) {
      setScrollHeight(undefined);
    } else {
      setScrollHeight(pageHeight - footerHeight - headerHeight);
    }
  };

  useEffect(() => {
    getScrollViewHeight();
  }, [contentHeight, footerHeight]);

  useEffect(() => {
    Dimensions.addEventListener("change", ({window: {height}}) => {
      setPageHeight(height);
      getScrollViewHeight();
    });
  }, []);

  return (
    <PageSafeArea noSafeArea={noSafeArea}>
      <ScrollView>
        <View style={{height: scrollHeight}}>
          <S.Container
            noPadding={noPadding}
            onLayout={event => setHeight(event, setContentHeight)}>
            {children}
          </S.Container>
        </View>

        <View onLayout={event => setHeight(event, setFooterHeight)}>
          {footer}
        </View>
      </ScrollView>
    </PageSafeArea>
  );
};
