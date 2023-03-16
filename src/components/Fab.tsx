import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Text} from 'react-native';

interface Props {
  title: string;
  position: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('blue', false, 25)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 70,
    borderRadius: 100,
  },
  left: {
    left: 35,
  },
  right: {
    right: 35,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Fab;
