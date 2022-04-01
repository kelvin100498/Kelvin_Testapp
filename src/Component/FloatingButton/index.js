import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../../Config/color';
import Feather from 'react-native-vector-icons/Feather';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.roundButton}>
      <Feather name="plus" size={30} color={COLOR.white} />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  roundButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: COLOR.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 50,
  },
});
