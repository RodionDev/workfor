export const enum FollowActionTypes {
  FOLLOWING_FETCHING = '@@follow/FOLLOWING_FETCHING',
  FOLLOWING_FETCHED = '@@follow/FOLLOWING_FETCHED',
  FOLLOWING_FETCH = '@@follow/FOLLOWING_FETCH',
  FOLLOWER_FETCHING = '@@follow/FOLLOWER_FETCHING',
  FOLLOWER_FETCHED = '@@follow/FOLLOWER_FETCHED',
  FOLLOWER_FETCH = '@@follow/FOLLOWER_FETCH',
  UNFOLLOW = '@@follow/UNFOLLOW',
  UNFOLLOW_CONFIRM = '@@follow/UNFOLLOW_CONFIRM',
  FOLLOW = '@@follow/FOLLOW',
  FOLLOW_ADD_USER = '@@follow/FOLLOW_ADD_USER',
  FOLLOW_CONFIRM = '@@follow/FOLLOW_CONFIRM',
  FOLLOW_CAN_FOLLOW_UPDATE = '@@follow/FOLLOW_CAN_FOLLOW_UPDATE'
}
export interface FollowState {
  readonly loading: boolean
  readonly followings: Array<{
    publicKey: string,
    createdAt: Date,
    balance: number,
    displayName: string,
    image: any
  }>,
  readonly followers: Array<{
    publicKey: string,
    createdAt: Date,
    balance: number,
    displayName: string,
    image: any
  }>,
  readonly unfollows: string[]
  readonly follows: string[]
  readonly userCanFollow: any[]
}
