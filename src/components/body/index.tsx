import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from 'src/constants/color';

const Body = memo(({children}): JSX.Element => {
  return <View style={styles.body}>{children}</View>;
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.PRIMARY,
  },
});

Body.displayName = 'Body';

export default Body;
