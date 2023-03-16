import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer} />
      <View style={styles.separator} />
      <View style={styles.yellowContainer} />
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
  title: {},
});
export default PositionScreen;
