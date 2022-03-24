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
const doFollowingFetch = (publicKeys: string[]): FollowAction => ({
  type: FollowActionTypes.FOLLOWING_FETCH,
  payload: {
    publicKeys
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
export {
  doFollowingFetching,
  doFollowingFetched,
  doFollowingFetch,
  doFollowerFetch,
  doFollowerFetched,
  doFollowerFetching,
}
