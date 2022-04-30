import { Action } from 'redux';
import { FollowActionTypes } from './types'
export interface FollowAction extends Action {
  payload: any
}
const doFollowingFetching = (): FollowAction => ({
  type: FollowActionTypes.FOLLOWING_FETCHING,
  payload: {
    loading: true,
  }
})
const doFollowingFetched = (data: any[]): FollowAction => ({
  type: FollowActionTypes.FOLLOWING_FETCHED,
  payload: {
    data
  }
})
const doFollowingFetch = (publicKey: string): FollowAction => ({
  type: FollowActionTypes.FOLLOWING_FETCH,
  payload: {
    publicKey
  }
})
const doFollowerFetching = (): FollowAction => ({
  type: FollowActionTypes.FOLLOWER_FETCHING,
  payload: {
    loading: true
  }
})
const doFollowerFetch = (publicKey: string): FollowAction => ({
  type: FollowActionTypes.FOLLOWER_FETCH,
  payload: {
    publicKey
  }
})
const doFollowerFetched = (data: any[]): FollowAction => ({
  type: FollowActionTypes.FOLLOWER_FETCHED,
  payload: {
    data
  }
})
const doUnfollow = (userPublicKey: string):  FollowAction => ({
  type: FollowActionTypes.UNFOLLOW,
  payload: {
    userPublicKey
  }
})
const doUnfollowConfirm = (unfollows: string[], followings: any[], privateKey: string): FollowAction => ({
  type: FollowActionTypes.UNFOLLOW_CONFIRM,
  payload: {
    unfollows,
    followings,
    privateKey
  }
})
const doFollow = (userPublicKey: string): FollowAction => ({
  type: FollowActionTypes.FOLLOW,
  payload: {
    userPublicKey
  }
})
export {
  doFollowingFetching,
  doFollowingFetched,
  doFollowingFetch,
  doFollowerFetch,
  doFollowerFetched,
  doFollowerFetching,
  doUnfollow,
  doUnfollowConfirm,
  doFollow
}
