import { Reducer } from 'redux';
import { FollowActionTypes, FollowState } from './types';
import { FollowAction } from './actions';
const initialState: FollowState = {
  loading: false,
  followers: [],
  followings: []
}
const applyFollowingFetching = (state: FollowState, action: FollowAction): FollowState => ({
  followers: [],
  followings: [],
  loading: true
})
const applyFollowingFetched = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  followings: action.payload.data,
  loading: false
})
const reducer: Reducer<FollowState, FollowAction> = (state = initialState, action) => {
  switch(action.type) {
    case FollowActionTypes.FOLLOWING_FETCHING: {
      return applyFollowingFetching(state, action);
    }
    case FollowActionTypes.FOLLOWING_FETCHED: {
      return applyFollowingFetched(state, action);
    }
    default: return state;
  }
}
export {
  reducer as followReducer
}
