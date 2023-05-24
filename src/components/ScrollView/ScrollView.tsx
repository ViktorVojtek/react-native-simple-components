import React from 'react';
import type {ReactNode} from 'react';

import {
  ScrollView as ScrollViewBase,
  ScrollViewProps as ScrollViewBaseProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import useColoredProps from '../../hooks/useColoredProps';

type Props = {
  children: ReactNode;
} & ViewStyle &
  ScrollViewBaseProps &
  Pick<ViewProps, 'style'>;

export type ScrollViewProps = Props;

const ScrollView = (props: Props) => {
  const coloredPropItems = useColoredProps(props);

  const {
    children,
    StickyHeaderComponent,
    contentContainerStyle,
    contentOffset,
    decelerationRate,
    disableIntervalMomentum,
    disableScrollViewPanResponder,
    horizontal,
    invertStickyHeaders,
    keyboardDismissMode,
    keyboardShouldPersistTaps,
    onContentSizeChange,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
    pagingEnabled,
    refreshControl,
    removeClippedSubviews,
    scrollEnabled,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    snapToEnd,
    snapToInterval,
    snapToOffsets,
    snapToStart,
    stickyHeaderHiddenOnScroll,
    stickyHeaderIndices,
    zoomScale,
    ...restStyleProps
  } = props;

  const scrollViewProps = {
    children,
    StickyHeaderComponent,
    contentContainerStyle,
    contentOffset,
    decelerationRate,
    disableIntervalMomentum,
    disableScrollViewPanResponder,
    horizontal,
    invertStickyHeaders,
    keyboardDismissMode,
    keyboardShouldPersistTaps,
    onContentSizeChange,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
    pagingEnabled,
    refreshControl,
    removeClippedSubviews,
    scrollEnabled,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    snapToEnd,
    snapToInterval,
    snapToOffsets,
    snapToStart,
    stickyHeaderHiddenOnScroll,
    stickyHeaderIndices,
    zoomScale,
  };

  return (
    <ScrollViewBase
      style={[{...restStyleProps}, ...coloredPropItems]}
      {...scrollViewProps}
    />
  );
};

export default ScrollView;
