import { Reducer } from 'redux';
import { FollowActionTypes, FollowState } from './types';
import { FollowAction } from './actions';
import { includes, equals } from 'ramda';
const initialState: FollowState = {
  loading: false,
  followers: [],
  followings: [],
  unfollows: [],
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
const applyUnfollow = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  unfollows: includes(action.payload.userPublicKey, state.unfollows) 
  ? state.unfollows.filter(unfollow => !equals(unfollow, action.payload.userPublicKey)) 
  : [...state.unfollows, action.payload.userPublicKey]
})
const applyUnfollowConfirm = (state: FollowState, action: FollowAction): FollowState => ({
  ...state,
  unfollows: [],
  followings: state.followings.filter(following => !includes(following.publicKey, action.payload.unfollows))
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
    case FollowActionTypes.UNFOLLOW: {
      return applyUnfollow(state, action);
    }
    case FollowActionTypes.UNFOLLOW_CONFIRM: {
      return applyUnfollowConfirm(state, action);
    }
    default: return state;
  }
}
export {
  reducer as followReducer
}
