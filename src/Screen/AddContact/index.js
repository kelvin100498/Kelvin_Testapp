import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//component
import CardTextInput from '../../Component/CardTextInput/index.js';
import Header from '../../Component/Header/index.js';
import {navigate} from '../../Helper/navigate.js';

const AddContact = () => {
  const dispatch = useDispatch();

  //text Input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setphoto] = useState(
    'https://res.cloudinary.com/ddvobptro/image/upload/v1642494701/siluet_wni7t4.png',
  );

  const [alertMessage, setAlertMesage] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const Submit = () => {
    dispatch({
      type: 'POST_ADD_CONTACT',
      payload: {firstName, lastName, age, photo},
    });
  };

  return (
    <SafeAreaView>
      <Header
        Submit={Submit}
        Cancel={() => {
          navigate('Home');
        }}
      />
      <CardTextInput
        value1={firstName}
        value2={lastName}
        value3={age}
        onChangeText1={text => setFirstName(text)}
        onChangeText2={text => setLastName(text)}
        onChangeText3={text => setAge(text)}
        placeholder1=" First Name"
        placeholder2=" Last Name"
        placeholder3=" Age"
        keyboardType3="phone-pad"
        alertMessage={alertMessage}
        setAlertMesage={setAlertMesage}
      />
    </SafeAreaView>
  );
};

export default AddContact;

const styles = StyleSheet.create({});
