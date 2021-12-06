import React, {useState} from 'react';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';

import Body from '@src/components/body';
import CheckBox from '@src/components/checkBox';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isFirstPressed, setIsFirstPressed] = useState<boolean>(false);
  const [isSecondPressed, setIsSecondPressed] = useState<boolean>(false);

  return (
    <Body>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CheckBox
          isChecked={isFirstPressed}
          onPress={() => setIsFirstPressed(!isFirstPressed)}
        />
        {/* <CheckBox
          isChecked={isSecondPressed}
          onPress={() => setIsSecondPressed(!isSecondPressed)}
        /> */}
      </ScrollView>
    </Body>
  );
};

export default App;
