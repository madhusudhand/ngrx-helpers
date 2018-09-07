import { APP_ACTIONS } from '../actions';
import { NgrxObject } from 'projects/ngrx-helpers/src/store/types';
import { VIEW_STATE } from 'projects/ngrx-helpers/src/enums/view-state.enum';
import { StoreUtil } from 'projects/ngrx-helpers/src/store/store-util';

export interface UserState {
  readonly userInfo: NgrxObject<any>;
}

const defaultState: UserState = {
  userInfo: {
    view: VIEW_STATE.INITIAL,
    data: null
  },
};

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_ACTIONS.GET_USER_RESOLVING:
      return StoreUtil.setResolving(state, 'userInfo', null);

    case APP_ACTIONS.GET_USER_RESOLVED:
      return StoreUtil.setResolved(state, 'userInfo', action.payload.data);

    case APP_ACTIONS.GET_USER_ERROR:
      return StoreUtil.setError(state, 'userInfo', 'Error Message');

    default:
      return state;
  }
}
