import {COLORS} from '@src/constants/color';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {CHECKBOX_ID} from './constants/testIds';

interface CheckBoxProps {
  isChecked: boolean;
}

const CheckBox = memo(({isChecked}: CheckBoxProps): JSX.Element => {
  return (
    <View
      style={{
        ...styles.body,
        backgroundColor: isChecked ? COLORS.SECONDARY : undefined,
      }}
      testID={CHECKBOX_ID.COMPONENT_BODY}>
      <View
        style={styles.checkIconContainer}
        testID={CHECKBOX_ID.COMPONENT_ICON}>
        <View style={styles.checkIconLeft} />
        <View style={styles.checkIconRight} />
      </View>
    </View>
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
  checkIconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  checkIconLeft: {
    borderTopWidth: 4,
    borderColor: 'white',
    marginTop: 8,
    marginRight: -6.5,
    width: 11,
    transform: [{rotate: '45deg'}],
  },
  checkIconRight: {
    borderTopWidth: 4,
    borderColor: 'white',
    width: 20,
    transform: [{rotate: '135deg'}],
  },
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
