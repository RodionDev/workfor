import { put, call } from 'redux-saga/effects';
import { UserAction, doPrivateKeyVerifying, doPrivateKeyVerifyFailed, doPrivateKeyVerifySuccess } from '../store/user';
import { getAccountSummary, getUserInfos } from '../api'
import { generateKey } from './helper';
import { doFollowingFetching, FollowAction, doFollowingFetched } from '../store/follow';
function *handlePrivateKeySubmit(action: UserAction) {
  yield put(doPrivateKeyVerifying());
  const { privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch (err) {
    yield put(doPrivateKeyVerifyFailed(privateKey));
  }
}
function *handleFollowingFetch(action: FollowAction) {
  yield put(doFollowingFetching());
  const { publicKeys } = action.payload;
  try {
    const data = yield call(getUserInfos, publicKeys);
    yield put(doFollowingFetched(data));
  } catch(err) {
    yield put(doFollowingFetched([]));
  }
}
export {
  handlePrivateKeySubmit,
  handleFollowingFetch
}
