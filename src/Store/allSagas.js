import {all} from 'redux-saga/effects';

//saga
import { HomeSaga } from '../Screen/Redux/HomeSaga';

export function* allSaga() {
  yield all([
    HomeSaga(),
  ]);
}
