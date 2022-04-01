import {Avatar} from 'react-native-elements';
import React from 'react';
import COLOR from '../../Config/color';

const ProfileFoto = ({
  size = 'small',
  source = 'https://res.cloudinary.com/ddvobptro/image/upload/v1642494701/siluet_wni7t4.png',
  borderColor = COLOR.blue,
  borderWidth = 1.5,
  borderRadius = 250,
}) => {
  return (
    <Avatar
      rounded
      size={size}
      source={{uri: source}}
      avatarStyle={{
        borderColor,
        borderWidth,
        borderRadius,
      }}
    />
  );
};

export default ProfileFoto;
