import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';

export default function Poppins({
  children,
  type = 'Reguler',
  size = 16,
  color = COLOR.white,
  fontName = 'Poppins',
  fontWeight = 'normal',
  align = 'auto',
  marginTop = 0,
  style = {},
}) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: `${fontName}-${type}`,
      fontSize: moderateScale(size),
      marginTop: moderateScale(marginTop),
      fontWeight,
      color,
      textAlign: align,
      ...style,
    },
  });
  return <Text style={styles.text}>{children}</Text>;
}
