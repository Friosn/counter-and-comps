import React from 'react';
import {SafeAreaView} from 'react-native';
/* import PositionAbsoulteScreen from './src/screens/PositionAbsoluteScreen'; */
/* import PositionRelativeScreen from './src/screens/PositionRelativeScreen'; */
/* import DimensionScreen from './src/screens/DimensionScreen'; */
/* import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'; */
/* import CounterScreen from './src/screens/CounterScreen'; */
import FlexScreen from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
