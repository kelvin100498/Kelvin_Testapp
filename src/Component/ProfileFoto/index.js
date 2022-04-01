import {Avatar} from 'react-native-elements';
import React from 'react';

const ProfileFoto = ({
  size = 'small',
  source = 'https://res.cloudinary.com/ddvobptro/image/upload/v1642494701/siluet_wni7t4.png',
}) => {
  return <Avatar rounded size={size} source={{uri: source}} />;
};

export default ProfileFoto;
