import {put, takeLatest, select} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import {
  apiGetAllContact,
  apiGetContactById,
  apiSaveContact,
  apiDeleteContact,
  apiEditContact,
} from '../../Config/api';
import {navigate} from '../../Helper/navigate';

//Get All Contact Saga
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

//Get Contact By Id Saga
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

//Save Contact Saga
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

//Delete Contact Saga
export function* deleteContact(action) {
  const TOASTDELETECONTACT = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan delete Contact',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiDeleteContact(id);
    console.log(res, '1');
    if (res.status == 202) {
      yield put({type: 'GET_HOME'});
      navigate('Home');
      console.log('2');
    } else {
      TOASTDELETECONTACT();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    TOASTDELETECONTACT();
  }
}

//Edit Contact Saga
export function* editContact(action) {
  const TOASTEDITCONTACTFAILED = () => {
    ToastAndroid.showWithGravity(
      'Gagal, Terjadi Kesalahan Edit Contact',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiEditContact(action.payload, id);
    console.log(res, '1');
    if (res.status == 201) {
      yield put({type: 'GET_CONTACT_BY_ID'});
      yield put({type: 'GET_HOME'});
      navigate('DetailScreen');
      console.log('2');
    } else {
      TOASTEDITCONTACTFAILED();
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    TOASTEDITCONTACTFAILED();
  }
}

export function* HomeSaga() {
  yield takeLatest('GET_HOME', homeSaga);
  yield takeLatest('GET_CONTACT_BY_ID', byIdSaga);
  yield takeLatest('POST_ADD_CONTACT', addContact);
  yield takeLatest('DELETE_CONTACT', deleteContact);
  yield takeLatest('EDIT_CONTACT', editContact);
}
