import { ActionType, StateType } from 'typesafe-actions';
import rootAction from '@/actions';
import rootReducer from '@/reducers';

export type IRootAction = ActionType<typeof rootAction>;
export type IRootState = StateType<typeof rootReducer>;
export type IServices = typeof import('@/apis').default;
