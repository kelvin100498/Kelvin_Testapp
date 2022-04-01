import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Poppins from '../Poppins/index.js.js';
import ProfileFoto from '../ProfileFoto';
import {useDispatch} from 'react-redux';
import {navigate} from '../../Helper/navigate';

const CardKontak = ({data, disable}) => {
  const dispatch = useDispatch();

  const SelectContact = id => {
    dispatch({type: 'SELECTED_ID_CONTACT', payload: id});
    navigate('DetailScreen');
  };

  return (
    <TouchableOpacity disabled={disable} onPress={() => SelectContact(data.id)}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          {/* left */}
          <View style={styles.ContainerLeft}>
            <ProfileFoto source={data.photo} />
            <View style={{marginLeft: moderateScale(14)}}>
              <Poppins>
                {data.firstName} {data.lastName}
              </Poppins>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  card: {
    marginBottom: moderateScale(12),
    marginHorizontal: moderateScale(8),
    borderRadius: moderateScale(14),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    elevation: 1,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(6),
  },
  ContainerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
