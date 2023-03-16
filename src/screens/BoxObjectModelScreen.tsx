import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hey there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'red',
  },
  title: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'green',
    fontSize: 20,
    padding: 50,
    margin: 20,
    alignSelf: 'center',
  },
});

export default BoxObjectModelScreen;
