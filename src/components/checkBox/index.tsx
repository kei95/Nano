import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Animated from 'react-native-reanimated';

import {useAnimateCheckBox} from './hooks/useAnimateCheckBox';
import {useAnimateCheckMark} from './hooks/useAnimateCheckMark';

import {COLORS} from '@src/constants/color';
import {CHECKBOX_ID} from './constants/testIds';
import CheckMark from './CheckMark';

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}

const CheckBox = memo(({isChecked, onPress}: CheckBoxProps): JSX.Element => {
  const [animatedStyle, animateCheckBox] = useAnimateCheckBox(isChecked);
  const [leftCheckAnimatedStyle, rightCheckAnimatedStyle, animateCheckIcon] =
    useAnimateCheckMark(isChecked);

  const handlePress = useCallback(() => {
    animateCheckBox();
    animateCheckIcon();
    onPress();
  }, [animateCheckBox, animateCheckIcon, onPress]);

  return (
    <TouchableHighlight underlayColor="transparent" onPress={handlePress}>
      <Animated.View
        testID={CHECKBOX_ID.COMPONENT_BODY}
        style={[
          {
            ...styles.body,
          },
          animatedStyle,
        ]}>
        <CheckMark
          leftCheckAnimatedStyle={leftCheckAnimatedStyle}
          rightCheckAnimatedStyle={rightCheckAnimatedStyle}
        />
      </Animated.View>
    </TouchableHighlight>
  );
});

const styles = StyleSheet.create({
  body: {
    borderColor: COLORS.TERTIARY,
    height: 36,
    width: 36,
    borderWidth: 2,
    borderRadius: 8,
  },
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
