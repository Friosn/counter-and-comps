import React from 'react';
import {View, StyleSheet} from 'react-native';

const PosFlexExercise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }, //para IOS habría que poner un SafeAreaView del mismo color en el app para que no se vean esos huecos blancos
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'purple',
    alignSelf: 'flex-end',
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default PosFlexExercise;
