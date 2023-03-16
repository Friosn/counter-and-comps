import React from 'react';
import {SafeAreaView} from 'react-native';
import PositionScreen from './src/screens/PositionScreen';

/* import DimensionScreen from './src/screens/DimensionScreen'; */
/* import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'; */
/* import CounterScreen from './src/screens/CounterScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
