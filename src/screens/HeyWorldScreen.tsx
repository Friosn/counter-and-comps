import React from 'react';
import {Text, View} from 'react-native';
import {Counter} from '../components/Counter';

const HeyWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'green',
        borderRadius: 10,
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: 'black',
            color: 'white',
            padding: 5,
          }}>
          Work you motherfucker, work!
        </Text>
      </View>
      <View>
        <Counter />
      </View>
    </View>
  );
};

export default HeyWorldScreen;
