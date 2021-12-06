import {useCallback} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import {COLORS} from '../../../constants/color';

export interface AnimatedCheckBoxStyle {
  transform: {
    rotateZ: string;
  }[];
  backgroundColor: string | number;
}

export const useAnimateCheckBox = (
  isChecked: boolean,
): [AnimatedCheckBoxStyle, () => void] => {
  const rotation = useSharedValue<number>(0);
  const color = useSharedValue<string | number>(
    isChecked ? COLORS.SECONDARY_RGBA : COLORS.SECONDARY_RGBA_TRANSPARENT,
  );

  const animatedStyle: AnimatedCheckBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
      backgroundColor: color.value,
    };
  });

  const animateCheckBox = useCallback(() => {
    color.value = withTiming(
      color.value === COLORS.SECONDARY_RGBA_TRANSPARENT
        ? COLORS.SECONDARY_RGBA
        : COLORS.SECONDARY_RGBA_TRANSPARENT,
    );
    rotation.value = withSequence(
      withTiming(-10, {duration: 50}),
      withRepeat(withTiming(10, {duration: 100}), 3, true),
      withTiming(0, {duration: 50}),
    );
  }, [color, rotation]);

  return [animatedStyle, animateCheckBox];
};
