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
export {
  doFollowingFetching,
  doFollowingFetched,
  doFollowingFetch
}
