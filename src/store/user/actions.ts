import { Action } from 'redux';
import { UserActionTypes } from './types';
export interface UserAction extends Action {
  payload: {
    privateKey: string,
    loading: boolean
  }
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
export {
  doPrivateKeyVerifying,
  doPrivateKeySubmit,
  doPrivateKeyVerifyFailed,
  doPrivateKeyVerifySuccess
}
