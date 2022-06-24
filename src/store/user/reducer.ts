import { Reducer, AnyAction } from 'redux';
import { UserState, UserActionTypes } from './types';
import { includes } from 'ramda';
const initialState: UserState = {
  loading: false,
  privateKey: '',
}
const applyPrivateKeyVerifying = (state: UserState, action: AnyAction): UserState => {
  return {
    ...state,
    loading: true
  }
}
const applyPrivateKeyVerifyFailed = (state: UserState, action: AnyAction): UserState => {
  return {
    ...state,
    loading: false
  }
}
const applyPrivateKeyVerifySuccess = (state: UserState, action: AnyAction): UserState => {
  return {
    ...action.payload
  }
}
const applyUpdateUsernameDone = (state: UserState, action: AnyAction): UserState => {
  return {
    ...state,
    displayName: action.payload.username
  }
}
const applyUpdateFollowing = (state: UserState, action: AnyAction): UserState => {
  return {
    ...state,
  }
}
const applyUserLogout = (state: UserState, action: AnyAction): UserState => {
  window.sessionStorage.clear();
  return {
    balance: undefined,
    createdAt: undefined,
    displayName: undefined,
    energy: 0,
    followerCount: 0,
    followingCount: 0,
    image: null,
    loading: false,
    privateKey: undefined,
    publicKey: undefined
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
    case UserActionTypes.UPDATE_USERNAME_DONE: {
      return applyUpdateUsernameDone(state, action);
    }
    case UserActionTypes.UPDATE_FOLLOWING: {
      return applyUpdateFollowing(state, action);
    }
    case UserActionTypes.USER_LOGOUT: {
      return applyUserLogout(state, action);
    }
    default: return state;
  }
}
export {
  reducer as userReducer
}
