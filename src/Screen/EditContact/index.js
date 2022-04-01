import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

//component
import CardTextInput from '../../Component/CardTextInput/index.js';
import ProfileFoto from '../../Component/ProfileFoto/index';
import Header from '../../Component/Header/index';

//helper
import {navigate} from '../../Helper/navigate.js';
import COLOR from '../../Config/color.js';

const EditContact = () => {
  const dispatch = useDispatch();
  const {selectedContactById} = useSelector(state => state.HomeReducer);

  const [firstName, setFirstName] = useState(selectedContactById?.firstName);
  const [lastName, setLastName] = useState(selectedContactById?.lastName);
  const [age, setAge] = useState(selectedContactById?.age + '');
  const [photo, setphoto] = useState(selectedContactById?.photo);

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
      <ScrollView>
        <Header
          HeaderText="Edit Contact"
          Cancel={() => {
            navigate('DetailScreen');
          }}
          Submit={Submit}
        />
        <View>
          <View style={styles.container}>
            <ProfileFoto
              borderColor={COLOR.light}
              size="xlarge"
              source={selectedContactById.photo}
            />
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditContact;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(32),
    marginBottom: moderateScale(20),
    alignItems: 'center',
  },
});
