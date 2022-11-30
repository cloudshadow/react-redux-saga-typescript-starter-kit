import produce from 'immer';
import { ActionType, getType, createReducer } from 'typesafe-actions';
import rootAction from '@/actions';
import { IHomeState } from '@/types/HomeTypes';

export type IHomeActions = ActionType<typeof rootAction.homeActions>;
export const defaultHomeState: IHomeState = {
  title: '',
  isLoading: false,
  hasError: false,
};

const home = createReducer<IHomeState, IHomeActions>(defaultHomeState)
  .handleType(getType(rootAction.homeActions.fetchTitle.request), (state) =>
    produce(state, (draft) => {
      draft.title = '';
      draft.isLoading = true;
      draft.hasError = false;
    })
  )
  .handleType(getType(rootAction.homeActions.fetchTitle.success), (state, action) =>
    produce(state, (draft) => {
      draft.title = action.payload;
      draft.isLoading = false;
      draft.hasError = false;
    })
  )
  .handleType(getType(rootAction.homeActions.fetchTitle.failure), (state) =>
    produce(state, (draft) => {
      draft.title = '';
      draft.isLoading = false;
      draft.hasError = true;
    })
  );

export default home;
