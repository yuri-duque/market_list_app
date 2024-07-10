import {useEffect, useState} from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  View,
  useWindowDimensions,
} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import {PageSafeArea} from "./SaveArea";
import * as S from "./styles";
import {PageProps} from "./types";

export const Page = ({noPadding, noSafeArea, children, footer}: PageProps) => {
  const initialPageHeight = useWindowDimensions().height;
  const headerHeight = useHeaderHeight();

  const [pageHeight, setPageHeight] = useState<number>(initialPageHeight);
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
    const contentSize = contentHeight + headerHeight + footerHeight;
    const scrollSize = contentSize > pageHeight ? contentSize : pageHeight;

    console.log("contentSize", {scrollSize, headerHeight, footerHeight});

    setScrollHeight(scrollSize - headerHeight - footerHeight);
  };

  useEffect(() => {
    getScrollViewHeight();
  }, [pageHeight, contentHeight, footerHeight]);

  useEffect(() => {
    Dimensions.addEventListener("change", ({window: {height}}) => {
      setPageHeight(height);
    });
  }, []);

  return (
    <PageSafeArea noSafeArea={noSafeArea}>
      <S.ScrollView>
        <View
          style={{
            maxHeight: scrollHeight,
            height: scrollHeight,
            backgroundColor: "red",
          }}>
          <S.Container
            noPadding={noPadding}
            onLayout={event => setHeight(event, setContentHeight)}>
            {children}
          </S.Container>
        </View>

        {footer && (
          <View onLayout={event => setHeight(event, setFooterHeight)}>
            {footer}
          </View>
        )}
      </S.ScrollView>
    </PageSafeArea>
  );
};
