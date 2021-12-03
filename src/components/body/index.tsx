import React, {memo} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {COLORS} from '@src/constants/color';
import {BODY_TEST_IDs} from './constants/testIds';

const Body = memo(({children}): JSX.Element => {
  return (
    <View style={styles.body} testID={BODY_TEST_IDs.COMPONENT_BODY}>
      <SafeAreaView>{children}</SafeAreaView>
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
