import { combineReducers } from 'redux';
import { primaryPanelReducer, PrimaryPanelState } from './primary-panel';
import { userReducer, UserState } from './user';
export interface ApplicationState {
  primaryPanel: PrimaryPanelState,
  user: UserState
};
export const rootReducer = combineReducers<ApplicationState>({
  primaryPanel: primaryPanelReducer,
  user: userReducer
});
