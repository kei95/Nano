import React from 'react';
import {ScrollView, StatusBar, StyleSheet, useColorScheme} from 'react-native';

import Body from '@src/components/body';
import CheckBox from '@src/components/checkBox';

import Test from '@src/components/checkBox/constants/test.svg';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Body>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CheckBox isChecked={false} />
        <CheckBox isChecked={true} />
      </ScrollView>
    </Body>
  );
};

export default App;
