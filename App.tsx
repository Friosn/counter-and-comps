import React from 'react';
import {SafeAreaView} from 'react-native';

import DimensionScreen from './src/screens/DimensionScreen';

/* import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'; */
/* import CounterScreen from './src/screens/CounterScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DimensionScreen />
    </SafeAreaView>
  );
};

export default App;
