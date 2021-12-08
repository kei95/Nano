import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import CheckBox from '../index';

export const actions = {
  onPress: action('onPress'),
};

const checkBoxStories = storiesOf('CheckBox', module);

checkBoxStories
  .add('default view', () => (
    <CheckBox isChecked={false} onPress={actions.onPress} />
  ))
  .add('checked', () => (
    <CheckBox isChecked={true} onPress={actions.onPress} />
  ));
