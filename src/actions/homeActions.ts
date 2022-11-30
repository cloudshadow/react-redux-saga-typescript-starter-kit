import { createAsyncAction } from 'typesafe-actions';

export const homeActions = {
  fetchTitle: createAsyncAction('FETCH_TITLE_REQUEST', 'FETCH_TITLE_SUCCESS', 'FETCH_TITLE_FAILURE')<
    void,
    string,
    Error
  >(),
};
