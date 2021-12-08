// @flow
import { combineReducers } from 'redux';
import type { ActionType } from './types';
import location from './modules/location';
import type { LocationStateType } from './modules/location';
import profile from './modules/profile';
import session, { actionTypes as sessionActions } from './modules/session';
import type { SessionStateType } from './modules/session';
import type { ProfileStateType } from './modules/profile';

export type StateType = {
  location: LocationStateType,
  profile: ProfileStateType,
  session: SessionStateType,
};

const appReducer = combineReducers({
  location,
  profile,
  session,
});

export default function rootReducer(
  state: StateType,
  action: ActionType,
): StateType {
  if (action.type === sessionActions.SIGN_OUT) {
    state = {};
  }

  return appReducer(state, action);
}
