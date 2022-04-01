import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Poppins from '../Poppins/index.js';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../../Config/color.js';
import {navigate} from '../../Helper/navigate.js';

const Header = ({Submit}) => {
  return (
    <View style={styles.ContainerLeft}>
      <TouchableOpacity
        onPress={() => {
          navigate('Home');
        }}>
        <View>
          <Entypo name="cross" size={28} color={COLOR.red} />
        </View>
      </TouchableOpacity>
      <View>
        <Poppins size={18} fontWeight="bold">
          Add Contact
        </Poppins>
      </View>
      <TouchableOpacity onPress={Submit}>
        <View>
          <Feather name="check" size={28} color={COLOR.blue} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  ContainerLeft: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(12),
    marginHorizontal: moderateScale(12),
  },
});
