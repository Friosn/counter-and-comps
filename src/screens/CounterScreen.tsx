import React from 'react';
import {View} from 'react-native';
import {Counter} from '../components/Counter';

const CounterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <Counter />
    </View>
  );
};

export default CounterScreen;
