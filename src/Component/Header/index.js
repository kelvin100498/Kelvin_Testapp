import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Poppins from '../Poppins/index.js';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../../Config/color.js';

const Header = ({Submit, HeaderText = 'Add Contact', Cancel}) => {
  return (
    <View style={styles.ContainerLeft}>
      <TouchableOpacity onPress={Cancel}>
        <View>
          <Entypo name="cross" size={28} color={COLOR.red} />
        </View>
      </TouchableOpacity>
      <View>
        <Poppins size={18} fontWeight="bold">
          {HeaderText}
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
