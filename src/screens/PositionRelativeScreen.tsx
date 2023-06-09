import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionRelativeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.title}>Relative</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.title}>Relative</Text>
      </View>
      <View style={styles.yellowContainer}>
        <Text style={styles.title}>Relative</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    top: -200,
    right: 100,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    top: 200,
    left: 100,
  },
  separator: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default PositionRelativeScreen;
