import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';

const CardTextInput = ({
  value1,
  onChangeText1,
  placeholder1,
  value2,
  onChangeText2,
  placeholder2,
  value3,
  onChangeText3,
  placeholder3,
  keyboardType1 = 'default',
  keyboardType2 = 'default',
  keyboardType3 = 'default',
}) => {
  return (
    <View>
      <View>
        <View style={styles.containerTextInput}>
          <TextInput
            keyboardType={keyboardType1}
            placeholder={placeholder1}
            value={value1}
            style={styles.TextInput}
            placeholderTextColor={COLOR.light}
            onChangeText={onChangeText1}
            color={COLOR.white}
          />
        </View>
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              keyboardType={keyboardType2}
              placeholder={placeholder2}
              value={value2}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText2}
              color={COLOR.white}
            />
          </View>
        </View>
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              placeholder={placeholder3}
              keyboardType={keyboardType3}
              value={value3}
              style={styles.TextInput}
              placeholderTextColor={COLOR.light}
              onChangeText={onChangeText3}
              color={COLOR.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

//edit Profile
export default CardTextInput;

const styles = StyleSheet.create({
  TextInput: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLOR.blackSecond,
    color: COLOR.white,
  },
  containerTextInput: {
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: COLOR.blackSecond,
    borderColor: COLOR.blackSecond,
    borderWidth: 1,
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(6),
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
