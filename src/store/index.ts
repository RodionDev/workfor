import { combineReducers } from 'redux';
import { primaryPanelReducer, PrimaryPanelState } from './primary-panel';
import { userReducer, UserState } from './user';
import { followReducer, FollowState } from './follow';
import { postReducer, PostState } from './post';
export interface ApplicationState {
  primaryPanel: PrimaryPanelState,
  user: UserState,
  follow: FollowState,
  post: PostState
};
export const rootReducer = combineReducers<ApplicationState>({
  primaryPanel: primaryPanelReducer,
  user: userReducer,
  follow: followReducer,
  post: postReducer
});
