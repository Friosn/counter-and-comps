import React from 'react';
import {View} from 'react-native';
import HeyWorldScreen from './src/screens/HeyWorldScreen';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HeyWorldScreen />
    </View>
  );
};

export default App;
