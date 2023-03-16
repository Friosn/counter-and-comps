import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={{justifyContent: 'space-around'}}>
      <Text style={styles.counterText}>Counter: {counter}</Text>

      <TouchableOpacity
        style={styles.fabLocationPlus}
        onPressIn={() => setCounter(counter + 10)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+10</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationMinus}
        onPressIn={() => setCounter(counter - 10)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-10</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    borderRadius: 15,
    padding: 5,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 8,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  fabLocationMinus: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  fabLocationPlus: {
    position: 'absolute',
    bottom: 0,
    left: 10,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
