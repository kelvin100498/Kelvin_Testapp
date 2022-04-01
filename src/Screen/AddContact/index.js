import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Poppins from '../../Component/Poppins/index.js';
import {useDispatch} from 'react-redux';
import CardTextInput from '../../Component/CardTextInput/index.js';
import Header from '../../Component/Header/index.js';

const AddContact = () => {
  const dispatch = useDispatch();
  //text Input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setphoto] = useState(
    'https://res.cloudinary.com/ddvobptro/image/upload/v1642494701/siluet_wni7t4.png',
  );

  const Submit = () => {
    dispatch({
      type: 'POST_ADD_CONTACT',
      payload: {firstName, lastName, age, photo},
    });
  };

  return (
    <SafeAreaView>
      <Header Submit={Submit} />
      <CardTextInput
        value1={firstName}
        value2={lastName}
        value3={age}
        onChangeText1={text => setFirstName(text)}
        onChangeText2={text => setLastName(text)}
        onChangeText3={text => setAge(text)}
        placeholder1="Nama Depan"
        placeholder2="Nama Belakang"
        placeholder3="Umur"
        keyboardType3="phone-pad"
      />
    </SafeAreaView>
  );
};

export default AddContact;

const styles = StyleSheet.create({});
