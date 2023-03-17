import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionAbsoulteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.title}>Absolute</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.title}>Absolute</Text>
      </View>
      <View style={styles.yellowContainer}>
        <Text style={styles.title}>Absolute</Text>
      </View>
      <View style={styles.blueContainer}>
        <Text style={styles.title}>Absolute</Text>
      </View>
      <View style={styles.blackContainer}>
        <Text style={styles.title}>Absolute</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    /*    justifyContent: 'center',
    alignItems: 'center', */
  },
  greenContainer: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    width: 50,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  separator: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  blueContainer: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  blackContainer: {
    backgroundColor: 'black',
    width: 50,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
});
export default PositionAbsoulteScreen;
