import {put, takeLatest, select} from 'redux-saga/effects';
import {ToastAndroid, Alert} from 'react-native';
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
  try {
    const res = yield apiGetAllContact();
    console.log(res, '1');
    if (res.status < 400) {
      console.log('2');
      yield put({type: 'CONTACTREDUCER', payload: res.data.data});
    } else {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    ToastAndroid.showWithGravity(
      res.data.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

//Get Contact By Id Saga
export function* byIdSaga(action) {
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiGetContactById(id);
    console.log(res, '1');
    if (res.status < 400) {
      console.log('2');
      yield put({type: 'SELECTED_CONTACT_BY_ID', payload: res.data.data});
    } else {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    ToastAndroid.showWithGravity(
      res.data.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

//Save Contact Saga
export function* addContact(action) {
  try {
    const res = yield apiSaveContact(action.payload);
    console.log(res, '1');
    if (res.status < 400) {
      yield put({type: 'GET_HOME'});
      navigate('Home');
      console.log('2');
    } else {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    ToastAndroid.showWithGravity(
      res.data.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

//Delete Contact Saga
export function* deleteContact(action) {
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiDeleteContact(id);
    console.log(res, '1');
    if (res.status < 400) {
      yield put({type: 'GET_HOME'});
      navigate('Home');
      console.log('2');
    } else {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    ToastAndroid.showWithGravity(
      res.data.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

//Edit Contact Saga
export function* editContact(action) {
  try {
    const id = yield select(state => state.HomeReducer.selectedID);
    const res = yield apiEditContact(action.payload, id);
    console.log(res, '1');
    if (res.status < 400) {
      yield put({type: 'GET_CONTACT_BY_ID'});
      yield put({type: 'GET_HOME'});
      navigate('DetailScreen');
      console.log('2');
    } else {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    ToastAndroid.showWithGravity(
      res.data.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

export function* HomeSaga() {
  yield takeLatest('GET_HOME', homeSaga);
  yield takeLatest('GET_CONTACT_BY_ID', byIdSaga);
  yield takeLatest('POST_ADD_CONTACT', addContact);
  yield takeLatest('DELETE_CONTACT', deleteContact);
  yield takeLatest('EDIT_CONTACT', editContact);
}
