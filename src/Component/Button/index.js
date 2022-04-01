import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';

const ButtonPrimary = ({
  onPress,
  icon = {active: false},
  text,
  type = 'Reguler',
  fontSize = 16,
  color = COLOR.white,
  align = 'center',
  style = {},
  backgroundColor = COLOR.blue,
  height = 43,
  borderRadius = 8,
  justifyContent = 'center',
  alignItems = 'center',
  marginTop = 24,
  marginBottom = 0,
  marginHorizontal = 20,
  borderColor = COLOR.blue,
  borderWidth = 2,
  paddingHorizontal = 0,
  sourceIcon,
}) => {
  const styles = StyleSheet.create({
    btnPrimary: {
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      height: moderateScale(height),
      borderRadius,
      justifyContent,
      alignItems,
      marginTop: moderateScale(marginTop),
      marginBottom: moderateScale(marginBottom),
      marginHorizontal: moderateScale(marginHorizontal),
      borderColor: borderColor,
      borderWidth: moderateScale(borderWidth),
      paddingHorizontal: moderateScale(paddingHorizontal),
      elevation: 1,
    },
    text: {
      fontFamily: `${type}`,
      fontSize: moderateScale(fontSize),
      color,
      textAlign: align,
      ...style,
    },
  });
  return (
    <TouchableOpacity style={styles.btnPrimary} onPress={onPress}>
      <Text style={styles.text}>
        {icon.active ? sourceIcon : null}
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
