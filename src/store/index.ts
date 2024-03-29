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
const initialState: ApplicationState = {
  primaryPanel: {
    tabId: 0
  },
  user: {
    privateKey: '',
    loading: false,
    payments: []
  },
  follow: {
    followers: [],
    followings: [], 
    loading: false,
    unfollows: [],
    follows: [],
    userCanFollow: []
  },
  post: {
    posts: [],
    loading: false,
    selectedPost: null,
    feeds: []
  }
}
const appReducer = combineReducers<ApplicationState>({
  primaryPanel: primaryPanelReducer,
  user: userReducer,
  follow: followReducer,
  post: postReducer
});
export const rootReducer = (state, action) => {
  if (action.type === '@@user/USER_LOGOUT') {
    state = initialState
  }
  return appReducer(state, action);
}
