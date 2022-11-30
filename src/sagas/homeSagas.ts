import { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';
import rootAction from '@/actions';
import apis from '@/apis';

// action: ReturnType<typeof rootAction.homeActions.fetchTitle.request>
function* fetchTitle() {
  try {
    const response: AxiosResponse = yield apis.homeApis.fetchTitle();
    yield put(rootAction.homeActions.fetchTitle.success(response.data));
    // yield triggerHomeToast(true, response.data.message);
  } catch (error) {
    yield put(rootAction.homeActions.fetchTitle.failure(error));
  }
}

export { fetchTitle };
