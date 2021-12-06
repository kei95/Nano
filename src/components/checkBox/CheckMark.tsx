import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {AnimatedCheckMarkStyle} from './hooks/useAnimateCheckMark';

import {COLORS} from '@src/constants/color';
import {CHECKBOX_ID} from './constants/testIds';

interface CheckMarkProps {
  leftCheckAnimatedStyle: AnimatedCheckMarkStyle;
  rightCheckAnimatedStyle: AnimatedCheckMarkStyle;
}

const CheckMark = memo(
  ({
    leftCheckAnimatedStyle,
    rightCheckAnimatedStyle,
  }: CheckMarkProps): JSX.Element => {
    return (
      <View style={styles.checkIconContainer}>
        <Animated.View
          style={[styles.checkIconLeft, leftCheckAnimatedStyle]}
          testID={CHECKBOX_ID.COMPONENT_ICON_LEFT}
        />
        <Animated.View
          style={[styles.checkIconRight, rightCheckAnimatedStyle]}
          testID={CHECKBOX_ID.COMPONENT_ICON_RIGHT}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  checkIconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  checkIconLeft: {
    position: 'absolute',
    top: 8,
    right: 5,
    borderTopWidth: 4,
    borderColor: COLORS.WHITE,
    marginTop: 8,
    marginRight: -4,
    transform: [{rotate: '45deg'}],
  },
  checkIconRight: {
    position: 'absolute',
    left: -7,
    borderTopWidth: 4,
    borderColor: 'white',
    transform: [{rotate: '135deg'}],
  },
});

CheckMark.displayName = 'CheckMark';

export default CheckMark;
