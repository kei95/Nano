import React from 'react';
import {ScrollView, StatusBar, StyleSheet, useColorScheme} from 'react-native';

import Body from '@src/components/body';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Body>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </Body>
  );
};

export default App;
