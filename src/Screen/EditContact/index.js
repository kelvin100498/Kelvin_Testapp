import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header/index';
import {navigate} from '../../Helper/navigate.js';
import CardTextInput from '../../Component/CardTextInput/index.js';
import {useSelector, useDispatch} from 'react-redux';

const EditContact = () => {
  const dispatch = useDispatch();
  const {selectedContactById} = useSelector(state => state.HomeReducer);

  const [firstName, setFirstName] = useState(selectedContactById?.firstName);
  const [lastName, setLastName] = useState(selectedContactById?.lastName);
  const [age, setAge] = useState(selectedContactById?.age + '');
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
      type: 'EDIT_CONTACT',
      payload: {firstName, lastName, age, photo},
    });
  };

  return (
    <SafeAreaView>
      <Header
        HeaderText="Edit Contact"
        Cancel={() => {
          navigate('DetailScreen');
        }}
        Submit={Submit}
      />
      <View>
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
      </View>
    </SafeAreaView>
  );
};

export default EditContact;

const styles = StyleSheet.create({});
