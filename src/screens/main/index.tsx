import React, {memo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {STYLES} from '@src/constants/styles';

import Body from '@src/components/body';
import CheckBox from '@src/components/checkBox';

const Main = memo((): JSX.Element => {
  const [isFirstPressed, setIsFirstPressed] = useState<boolean>(false);

  return (
    <Body>
      <ScrollView
        style={styles.scrollBody}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            isChecked={isFirstPressed}
            onPress={() => setIsFirstPressed(!isFirstPressed)}
            text={
              '(Example) - Open this app. \n Try to set up easy item that you can do everyday without effort'
            }
            subText="10 streaks!🎉"
          />
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            isChecked={isFirstPressed}
            onPress={() => setIsFirstPressed(!isFirstPressed)}
            text="Take a shoes in the morning"
          />
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            isChecked={isFirstPressed}
            onPress={() => setIsFirstPressed(!isFirstPressed)}
            text="Get ready to do push ups after shower"
            subText="3 streaks!🎉"
          />
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            isChecked={isFirstPressed}
            onPress={() => setIsFirstPressed(!isFirstPressed)}
            text="Don't go back to bed once waking up each morning"
          />
        </View>
      </ScrollView>
    </Body>
  );
});

const styles = StyleSheet.create({
  scrollBody: {
    ...STYLES.DEFAULT_HORIZONTAL_SPACE,
    flex: 1,
  },
  checkBoxWrapper: {
    height: 85,
    justifyContent: 'center',
  },
});

Main.displayName = 'Main';

export default Main;
