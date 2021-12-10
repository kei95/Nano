import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {STYLES} from '@src/constants/styles';
import CheckBox from '../index';

export const actions = {
  onPress: action('onPress'),
};

const checkBoxStories = storiesOf('CheckBox', module);

checkBoxStories
  .addDecorator(story => (
    <View style={STYLES.BODY_CENTER_ITEMS}>{story()}</View>
  ))
  .add('default - unchecked', () => (
    <CheckBox
      isChecked={false}
      onPress={actions.onPress}
      text="This is test text"
      subText="10 streaks🎉"
    />
  ))
  .add('checked', () => (
    <CheckBox
      isChecked={true}
      onPress={actions.onPress}
      text="This is test text"
      subText="10 streaks🎉"
    />
  ));
