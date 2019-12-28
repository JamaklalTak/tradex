import { all, fork } from 'redux-saga/effects';
import * as appSagas from '../pages/App/store/sagas';


export default function* sagas() {
  yield all([...Object.values(appSagas)].map(fork));
}