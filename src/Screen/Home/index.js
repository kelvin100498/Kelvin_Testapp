import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

//component
import Poppins from '../../Component/Poppins/index.js';
import ImageNull from '../../Component/imageNull';
import CardKontak from '../../Component/CardContact';
import FloatingButton from '../../Component/FloatingButton';

//helper
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
        <Poppins fontWeight="bold" size={26}>
          My Contact
        </Poppins>
      </View>
      {dataContact.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={true}>
          {dataContact.map((data, i) => {
            return <CardKontak key={i} data={data} />;
          })}
        </ScrollView>
      ) : (
        <>
          <ImageNull marginTop={60} text="Press Button + Add contact" />
        </>
      )}

      {/* Button */}
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
    marginTop: moderateScale(18),
    marginBottom: moderateScale(22),
  },
});
