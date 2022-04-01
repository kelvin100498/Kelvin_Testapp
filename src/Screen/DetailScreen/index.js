import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Poppins from '../../Component/Poppins/index.js';
import CardKontak from '../../Component/CardContact/index.js';
import {useSelector, useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../../Config/color.js';

const DetailScreen = () => {
  const dispatch = useDispatch();
  const {selectedContactById} = useSelector(state => state.HomeReducer);

  useEffect(() => {
    dispatch({type: 'GET_CONTACT_BY_ID'});
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.ContainerLeft}>
          <CardKontak disable={true} data={selectedContactById} />
          {/* <View>
            <Feather name="edit" size={24} color={COLOR.white} />
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(30),
  },
});
