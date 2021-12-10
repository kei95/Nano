import React, {memo} from 'react';
import Config from 'react-native-config';
import StorybookUIRoot from 'storybook';

import Main from '@src/screens/main';

const App = memo(() => {
  return Config.LOAD_STORYBOOK === 'true' ? <StorybookUIRoot /> : <Main />;
});

App.displayName = 'App';

export default App;
