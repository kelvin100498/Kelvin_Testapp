import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import COLOR from '../../Config/color';
import Poppins from '../../Component/Poppins/index.js';
import {moderateScale} from 'react-native-size-matters';
import CardKontak from '../../Component/CardContact';
import ButtonPrimary from '../../Component/Button';
import FloatingButton from '../../Component/FloatingButton';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '../../Helper/navigate';

const Home = () => {
  const dispatch = useDispatch();
  const {dataContact} = useSelector(state => state.HomeReducer);

  useEffect(() => {
    dispatch({type: 'GET_HOME'});
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Poppins size={24}>My Contact</Poppins>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        {dataContact.map((data, i) => {
          return <CardKontak key={i} data={data} />;
        })}
        {/* Button */}
      </ScrollView>
      <FloatingButton
        onPress={() => {
          navigate('AddContact');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: moderateScale(12),
    marginBottom: moderateScale(28),
  },
});
