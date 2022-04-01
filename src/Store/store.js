import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';
import {allSaga} from './allSagas';
import reduxSaga from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = reduxSaga();
const allMiddleware = applyMiddleware(logger, sagaMiddleware);

export const store = createStore(allReducers, allMiddleware);

sagaMiddleware.run(allSaga);
