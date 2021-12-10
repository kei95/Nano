import React, {memo} from 'react';
import {StyleSheet, View, SafeAreaView, ViewStyle} from 'react-native';

import {COLORS} from '@src/constants/color';
import {BODY_TEST_IDs} from './constants/testIds';

interface BodyProps {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
}

const Body = memo(({style, children}: BodyProps): JSX.Element => {
  return (
    <View style={[styles.body, style]} testID={BODY_TEST_IDs.COMPONENT_BODY}>
      <SafeAreaView style={[styles.body, style]}>{children}</SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});

Body.displayName = 'Body';

export default Body;
