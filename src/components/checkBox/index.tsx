import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {useAnimateCheckBox} from './hooks/useAnimateCheckBox';
import {useAnimateCheckMark} from './hooks/useAnimateCheckMark';

import {COLORS} from '@src/constants/color';
import {CHECKBOX_ID} from './constants/testIds';
import CheckMark from './CheckMark';
import {TYPOGRAPHY} from '@src/constants/typography';

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
  text?: string;
  subText?: string;
}

// Might need to separate text and checkBox

const CheckBox = memo(
  ({isChecked, onPress, text, subText}: CheckBoxProps): JSX.Element => {
    const [animatedStyle, animateCheckBox] = useAnimateCheckBox(isChecked);
    const [leftCheckAnimatedStyle, rightCheckAnimatedStyle, animateCheckIcon] =
      useAnimateCheckMark(isChecked);
    const isShowTextBlock = text || subText;

    const handlePress = useCallback(() => {
      animateCheckBox();
      animateCheckIcon();
      onPress();
    }, [animateCheckBox, animateCheckIcon, onPress]);

    return (
      <TouchableHighlight underlayColor="transparent" onPress={handlePress}>
        <View style={styles.container}>
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
          {isShowTextBlock ? (
            <View style={styles.textsWrapper}>
              {text && (
                <Text numberOfLines={3} style={styles.text}>
                  {text}
                </Text>
              )}
              {subText && <Text style={styles.subText}>{subText}</Text>}
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableHighlight>
    );
  },
);

const styles = StyleSheet.create({
  body: {
    borderColor: COLORS.TERTIARY,
    height: 36,
    width: 36,
    borderWidth: 2,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textsWrapper: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  text: {
    ...TYPOGRAPHY.MEDIUM,
  },
  subText: {
    ...TYPOGRAPHY.SMALL,
    color: COLORS.SECONDARY,
    fontWeight: '500',
  },
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
