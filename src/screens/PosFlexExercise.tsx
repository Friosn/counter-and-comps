import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  }, //para IOS habría que poner un SafeAreaView del mismo color en el app para que no se vean esos huecos blancos
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'orange',
    alignSelf: 'center',
  },
  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default PosFlexExercise;
