import { Action } from 'redux';
import { UserActionTypes } from './types';
export interface UserAction extends Action {
  payload: any
}
const doPrivateKeyVerifying = (): UserAction => ({
  type: UserActionTypes.PRIVATE_KEY_VERIFYING,
  payload: {
    privateKey: '',
    loading: true
  }
});
const doPrivateKeySubmit = (privateKey: string): UserAction => ({
  type: UserActionTypes.PRIVATE_KEY_SUBMIT,
  payload: {
    privateKey,
    loading: true
  }
})
const doPrivateKeyVerifyFailed = (privateKey: string): UserAction => ({
  type: UserActionTypes.PRIVATE_KEY_VERIFY_FAILED,
  payload: {
    privateKey,
    loading: false
  }
})
const doPrivateKeyVerifySuccess = (privateKey: string, accountSummary: any): UserAction => ({
  type: UserActionTypes.PRIVATE_KEY_VERIFY_SUCCESS,
  payload: {
    privateKey,
    loading: false,
    ...accountSummary.result
  }
})
const doUpdateUsername = (privateKey: string, username: string): UserAction => ({
  type: UserActionTypes.UPDATE_USERNAME,
  payload: {
    privateKey,
    username
  }
})
const doUpdateUsernameDone = (username: string): UserAction => ({
  type: UserActionTypes.UPDATE_USERNAME_DONE,
  payload: {
    username
  }
})
const doUpdateFollowing = (unfollowKeys: string): UserAction => ({
  type: UserActionTypes.UPDATE_FOLLOWING,
  payload: {
    unfollowKeys
  }
})
const doUpdateImage = (buffer: Uint8Array, privateKey: string): UserAction => ({
  type: UserActionTypes.UPDATE_IMAGE,
  payload: {
    buffer,
    privateKey
  }
})
const doUserLogout = (): UserAction =>  ({
  type: UserActionTypes.USER_LOGOUT,
  payload: {
  }
})
export {
  doPrivateKeyVerifying,
  doPrivateKeySubmit,
  doPrivateKeyVerifyFailed,
  doPrivateKeyVerifySuccess,
  doUpdateUsername,
  doUpdateUsernameDone,
  doUpdateFollowing,
  doUpdateImage,
  doUserLogout,
}
