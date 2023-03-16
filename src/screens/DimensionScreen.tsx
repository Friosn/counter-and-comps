import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Text, View} from 'react-native'; //I could alse get it from the 'screen'

//The problem with this is that if we change to horizontal the camere, wht W and H stay the same; for that we can use the useWindowDimensions();
/* const {width, height} = Dimensions.get('window') */ const DimensionScreen =
  () => {
    const {width, height} = useWindowDimensions();

    return (
      <View>
        <View style={styles.container}>
          <View style={{...styles.containerRed, width: width * 0.8}} />
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
