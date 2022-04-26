export const enum UserActionTypes {
  PRIVATE_KEY_SUBMIT = '@@user/PRIVATE_KEY_SUBMIT',
  PRIVATE_KEY_VERIFYING = '@@user/PRIVATE_KEY_VERIFYING',
  PRIVATE_KEY_VERIFY_FAILED = '@@user/PRIVATE_KEY_VERIFY_FAILED',
  PRIVATE_KEY_VERIFY_SUCCESS = '@@user/PRIVATE_KEY_VERIFY_SUCCESS',
  UPDATE_USERNAME = '@@user/UPDATE_USERNAME',
  UPDATE_USERNAME_DONE = '@@user/UPDATE_USERNAME_DONE',
  UPDATE_FOLLOWING = '@@user/UPDATE_FOLLOWING',
  UPDATE_IMAGE = '@@user/UPDATE_IMAGE'
};
export interface UserState {
  readonly privateKey?: string
  readonly loading?: boolean
  readonly balance?: number
  readonly createdAt?: Date
  readonly displayName?: string
  readonly publicKey?: string
  readonly energy?: number
  readonly image?: any
  readonly followerCount?: number
  readonly followingCount?: number
}
