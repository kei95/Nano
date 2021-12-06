import {useCallback} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const LEFT_CHECK_MARK_WIDTH = 11;
const RIGHT_CHECK_MARK_WIDTH = 20;

export interface AnimatedCheckMarkStyle {
  width: number;
}

export const useAnimateCheckMark = (
  isChecked: boolean,
): [AnimatedCheckMarkStyle, AnimatedCheckMarkStyle, () => void] => {
  const leftCheckMarkAnimated = useSharedValue(
    isChecked ? LEFT_CHECK_MARK_WIDTH : 0,
  );
  const rightCheckMarkAnimated = useSharedValue(
    isChecked ? RIGHT_CHECK_MARK_WIDTH : 0,
  );

  const leftCheckAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: leftCheckMarkAnimated.value,
    };
  });

  const rightCheckAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: rightCheckMarkAnimated.value,
    };
  });

  const animateCheckIcon = useCallback(() => {
    if (leftCheckMarkAnimated.value === 0) {
      leftCheckMarkAnimated.value = withTiming(
        LEFT_CHECK_MARK_WIDTH,
        undefined,
        () => {
          // Trigger right side animation after the first animation is done
          rightCheckMarkAnimated.value = withTiming(RIGHT_CHECK_MARK_WIDTH);
        },
      );
    } else {
      leftCheckMarkAnimated.value = 0;
      rightCheckMarkAnimated.value = 0;
    }
  }, [leftCheckMarkAnimated, rightCheckMarkAnimated]);

  return [leftCheckAnimatedStyle, rightCheckAnimatedStyle, animateCheckIcon];
};
