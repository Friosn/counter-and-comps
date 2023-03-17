import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.title}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.title}>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  box1: {
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'green',
    flex: 1,
  },
  box2: {
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'blue',
    flex: 2,
  },
  box3: {
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'red',
    flex: 3,
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default FlexScreen;
