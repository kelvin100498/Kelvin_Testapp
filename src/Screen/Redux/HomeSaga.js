import {put, takeLatest, select} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import {
  apiGetAllContact,
  apiGetContactById,
  apiSaveContact,
} from '../../Config/api';
import {navigate} from '../../Helper/navigate';

export function* homeSaga(action) {
  const TOASTFAILEDHOME = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Kontak',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const res = yield apiGetAllContact();
    console.log(res, '1');
    if (res.status == 200) {
      console.log('2');
      yield put({type: 'CONTACTREDUCER', payload: res.data.data});
    } else {
      TOASTFAILEDHOME();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    TOASTFAILEDHOME();
  }
}

export function* byIdSaga(action) {
  const TOASTFAILEDID = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan ID',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiGetContactById(id);
    console.log(res, '1');
    if (res.status == 200) {
      console.log('2');
      yield put({type: 'SELECTED_CONTACT_BY_ID', payload: res.data.data});
    } else {
      TOASTFAILEDID();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    TOASTFAILEDID();
  }
}

export function* addContact(action) {
  const TOASTFAILEDCONTCACT = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Simpan Contact',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const res = yield apiSaveContact(action.payload);
    console.log(res, '1');
    if (res.status == 201) {
      yield put({type: 'GET_HOME'});
      navigate('Home');
      console.log('2');
    } else {
      TOASTFAILEDCONTCACT();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    TOASTFAILEDCONTCACT();
  }
}

export function* HomeSaga() {
  yield takeLatest('GET_HOME', homeSaga);
  yield takeLatest('GET_CONTACT_BY_ID', byIdSaga);
  yield takeLatest('POST_ADD_CONTACT', addContact);
}
