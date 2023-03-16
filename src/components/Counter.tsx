import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fab from './Fab';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.counterText}>Counter: {counter}</Text>
      </View>
      <Fab position="br" title="+10" onPress={() => setCounter(counter + 10)} />
      <Fab position="bl" title="-10" onPress={() => setCounter(counter - 10)} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 30,
    top: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
    padding: 5,
  },
  container: {
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
  },
});
