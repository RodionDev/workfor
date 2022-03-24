import { Reducer } from 'redux';
import { FollowActionTypes, FollowState } from './types';
import { FollowAction } from './actions';
const initialState: FollowState = {
  loading: false,
  followers: [],
  followings: []
}
const applyFollowingFetching = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  loading: true
})
const applyFollowingFetched = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  followings: action.payload.data,
  loading: false
})
const applyFollowerFetching = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  loading: true
})
const applyFollowerFetched = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  loading: false,
  followers: action.payload.data
})
const reducer: Reducer<FollowState, FollowAction> = (state = initialState, action) => {
  switch(action.type) {
    case FollowActionTypes.FOLLOWING_FETCHING: {
      return applyFollowingFetching(state, action);
    }
    case FollowActionTypes.FOLLOWING_FETCHED: {
      return applyFollowingFetched(state, action);
    }
    case FollowActionTypes.FOLLOWER_FETCHING: {
      return applyFollowerFetching(state, action);
    }
    case FollowActionTypes.FOLLOWER_FETCHED: {
      return applyFollowerFetched(state, action);
    }
    default: return state;
  }
}
export {
  reducer as followReducer
}
