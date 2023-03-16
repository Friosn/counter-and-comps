import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Dimensions} from 'react-native';

//The problem with this is that if we change to horizontal the camere, wht W and H stay the same; for that we can use the useWindowDimensions();
const {width, height} = Dimensions.get('window'); //I could alse get it from the 'screen'

const DimensionScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerRed} />
        <View style={styles.containeYellow} />
      </View>
      <Text style={styles.title}>
        W:{width} H:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '100%',
  },
  containerRed: {
    backgroundColor: 'red',
    width: '100%',
    height: '50%',
  },
  containeYellow: {
    backgroundColor: 'yellow',
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 20,
  },
});

export default DimensionScreen;
