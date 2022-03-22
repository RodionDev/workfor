import { combineReducers } from 'redux';
import { primaryPanelReducer, PrimaryPanelState } from './primary-panel';
import { userReducer, UserState } from './user';
import { followReducer, FollowState } from './follow';
export interface ApplicationState {
  primaryPanel: PrimaryPanelState,
  user: UserState,
  follow: FollowState
};
export const rootReducer = combineReducers<ApplicationState>({
  primaryPanel: primaryPanelReducer,
  user: userReducer,
  follow: followReducer
});
