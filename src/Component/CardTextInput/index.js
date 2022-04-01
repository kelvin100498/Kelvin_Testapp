import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
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
  alertMessage,
  setAlertMesage,
}) => {
  //firstName Validation
  const firstNameValidation = () => {
    if (!value1) {
      setAlertMesage({
        ...alertMessage,
        firstName: 'First name must be field !',
      });
    } else if (value1 && value1.length < 3) {
      setAlertMesage({
        ...alertMessage,
        firstName: 'Must be at least 3 characters !',
      });
    } else if (value1 && value1.length >= 3) {
      setAlertMesage({
        ...alertMessage,
        firstName: '',
      });
    }
  };

  //lastName Validation
  const LastNameValidation = () => {
    if (!value2) {
      setAlertMesage({
        ...alertMessage,
        LastName: 'Last name must be field !',
      });
    } else if (value2 && value2.length < 3) {
      setAlertMesage({
        ...alertMessage,
        LastName: 'Must be at least 3 characters !',
      });
    } else if (value2 && value2.length >= 3) {
      setAlertMesage({
        ...alertMessage,
        LastName: '',
      });
    }
  };

  //age Validation
  const ageValidation = () => {
    if (!value3) {
      setAlertMesage({
        ...alertMessage,
        age: 'Age must be field !',
      });
    } else if (value3 > 100) {
      setAlertMesage({
        ...alertMessage,
        age: 'Max age 100 !',
      });
    } else if (value3 <= 100) {
      setAlertMesage({
        ...alertMessage,
        age: '',
      });
    }
  };

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
            onBlur={firstNameValidation}
          />
        </View>
        <View style={{marginLeft: moderateScale(8)}}>
          {alertMessage.firstName ? (
            <Text style={{fontSize: 11, color: 'red'}}>
              {alertMessage.firstName}
            </Text>
          ) : null}
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
              onBlur={LastNameValidation}
            />
          </View>
        </View>
        <View style={{marginLeft: moderateScale(8)}}>
          {alertMessage.LastName ? (
            <Text style={{fontSize: 11, color: 'red'}}>
              {alertMessage.LastName}
            </Text>
          ) : null}
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
              onBlur={ageValidation}
            />
          </View>
        </View>
        <View style={{marginLeft: moderateScale(8)}}>
          {alertMessage.age ? (
            <Text style={{fontSize: 11, color: 'red'}}>{alertMessage.age}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

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
