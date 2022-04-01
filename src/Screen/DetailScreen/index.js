import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Poppins from '../../Component/Poppins/index.js';
import {useSelector, useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../../Config/color.js';
import ProfileFoto from '../../Component/ProfileFoto/index';
import OptionsMenu from 'react-native-options-menu';
import {navigate} from '../../Helper/navigate';

const DetailScreen = () => {
  const dispatch = useDispatch();
  const {selectedContactById} = useSelector(state => state.HomeReducer);

  const DeleteContact = () => {
    dispatch({
      type: 'DELETE_CONTACT',
    });
  };
  const EdiContact = () => {
    navigate('EditContact');
  };

  useEffect(() => {
    dispatch({type: 'GET_CONTACT_BY_ID'});
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.Icon}>
        <OptionsMenu
          customButton={
            <Entypo
              name="dots-three-horizontal"
              size={moderateScale(16)}
              color={COLOR.white}
            />
          }
          destructiveIndex={1}
          options={['Edit Contact', 'Delete Contact']}
          actions={[EdiContact, DeleteContact]}
        />
      </View>
      <View style={styles.container}>
        <ProfileFoto
          borderColor={COLOR.light}
          size="xlarge"
          source={selectedContactById.photo}
        />
      </View>
      <View style={styles.Name}>
        <Poppins fontWeight="bold" size={24}>
          {selectedContactById.firstName} {selectedContactById.lastName}
        </Poppins>
      </View>
      <View style={styles.TitleDetail}>
        <Poppins fontWeight="bold" size={16}>
          Detail Contact :
        </Poppins>
      </View>
      <View style={styles.Content}>
        <Poppins size={14}>{selectedContactById.id}</Poppins>
        <Poppins size={14}>Age : {selectedContactById.age}</Poppins>
        <Poppins size={14}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          laoreet blandit lacus euismod iaculis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus malesuada odio ante, sed fringilla lacus consequat a.
          Maecenas cursus ligula ac nunc iaculis dictum. Proin dapibus hendrerit
          tincidunt. Nulla urna metus, lobortis vel elit nec, vulputate mollis
          arcu. Suspendisse potenti. Vivamus quis erat hendrerit, condimentum
          nibh vel, tristique purus. Suspendisse eu tellus interdum, luctus enim
          eu, viverra risus. Ut iaculis sed metus imperdiet venenatis. Donec
          facilisis lacinia lacus in iaculis. Phasellus consectetur urna eu nisl
          euismod, et bibendum enim euismod.
        </Poppins>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(38),
    alignItems: 'center',
  },
  Name: {
    marginTop: moderateScale(28),
    alignItems: 'center',
  },
  Content: {
    marginHorizontal: moderateScale(12),
  },
  TitleDetail: {
    marginBottom: moderateScale(8),
    marginTop: moderateScale(22),
    marginHorizontal: moderateScale(8),
  },
  Icon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
