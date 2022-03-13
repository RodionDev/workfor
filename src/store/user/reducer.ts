import { Reducer, AnyAction } from 'redux';
import { UserState, UserActionTypes } from './types';
const initialState: UserState = {
  loading: false,
  privateKey: '',
}
const applyPrivateKeyVerifying = (state: UserState, action: AnyAction): UserState => {
  return {
    ...action.payload
  }
}
const applyPrivateKeyVerifyFailed = (state: UserState, action: AnyAction): UserState => {
  return {
    ...action.payload
  }
}
const applyPrivateKeyVerifySuccess = (state: UserState, action: AnyAction): UserState => {
  return {
    ...action.payload
  }
}
const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch(action.type) {
    case UserActionTypes.PRIVATE_KEY_VERIFYING: {
      return applyPrivateKeyVerifying(state, action);
    }
    case UserActionTypes.PRIVATE_KEY_VERIFY_FAILED: {
      return applyPrivateKeyVerifyFailed(state, action);
    }
    case UserActionTypes.PRIVATE_KEY_VERIFY_SUCCESS: {
      return applyPrivateKeyVerifySuccess(state, action);
    }
    default: return state;
  }
}
export {
  reducer as userReducer
}
