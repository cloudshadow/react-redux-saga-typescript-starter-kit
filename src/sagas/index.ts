import { takeLatest } from 'redux-saga/effects';
import rootAction from '@/actions';
import { fetchTitle } from './homeSagas';

function* rootSaga() {
  // home page sagas
  yield takeLatest(rootAction.homeActions.fetchTitle.request, fetchTitle);
}

export default rootSaga;
