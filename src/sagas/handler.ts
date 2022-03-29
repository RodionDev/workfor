import { put, call } from 'redux-saga/effects';
import { UserAction, doPrivateKeyVerifying, doPrivateKeyVerifyFailed, doPrivateKeyVerifySuccess, doPrivateKeySubmit, doUpdateUsernameDone } from '../store/user';
import { getAccountSummary, getUserInfos, getFollower, postContent, updateUsername } from '../api'
import { generateKey } from './helper';
import { doFollowingFetching, FollowAction, doFollowingFetched, doFollowerFetching, doFollowerFetched } from '../store/follow';
import { PostAction } from '../store/post';
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
function *handleFollowerFetch(action: FollowAction) {
  yield put(doFollowerFetching());
  const { publicKey } = action.payload;
  try {
    const data = yield call(getFollower, publicKey);
    yield put(doFollowerFetched(data));
  } catch(err) {
    yield put(doFollowerFetched([]));
  }
}
function *handlePostSubmit(action: PostAction) {
  const { publicKey, content, privateKey } = action.payload;
  try {
    yield call(postContent, publicKey, content, privateKey);
  } catch (err) {
    console.log(err);
  }
}
function *handleUpdateUsername(action: UserAction) {
  const { privateKey, username } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    yield call(updateUsername, publicKey, username, privateKey);
    yield put(doUpdateUsernameDone(username))
  } catch (err) {
    console.log(err);
  }
}
export {
  handlePrivateKeySubmit,
  handleFollowingFetch,
  handleFollowerFetch,
  handlePostSubmit,
  handleUpdateUsername
}
