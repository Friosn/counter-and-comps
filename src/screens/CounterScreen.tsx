import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Counter} from '../components/Counter';

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default CounterScreen;
