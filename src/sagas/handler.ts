import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { UserAction, doPrivateKeyVerifying, doPrivateKeyVerifyFailed, doPrivateKeyVerifySuccess, doPrivateKeySubmit, doUpdateUsernameDone, doUpdateFollowing } from '../store/user';
import { getAccountSummary, getUserInfos, getFollower, postContent, updateUsername, updateFollowing, getPosts, getFollowing, updateImage, getAllUsers } from '../api'
import { generateKey } from './helper';
import { doFollowingFetching, FollowAction, doFollowingFetched, doFollowerFetching, doFollowerFetched, doFollowerFetch, doFollowingFetch, doFollowAddUser } from '../store/follow';
import { PostAction, doPostFetch, doPostFetched } from '../store/post';
import { compose, map, filter } from 'ramda';
import includes from 'ramda/es/includes';
function *handlePrivateKeySubmit(action: UserAction) {
  yield put(doPrivateKeyVerifying());
  const { privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPostFetch(publicKey));
    yield put(doFollowerFetch(publicKey));
    yield put(doFollowingFetch(publicKey));
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch (err) {
    yield put(doPrivateKeyVerifyFailed(privateKey));
  }
}
function *handleFollowingFetch(action: FollowAction) {
  yield put(doFollowingFetching());
  const { publicKey } = action.payload;
  try {
    const allUsers = yield call(getAllUsers);
    yield put(doFollowAddUser(allUsers));
    const data = yield call(getFollowing, publicKey);
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
    yield delay(3000);
    yield put(doPostFetch(publicKey))
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
    yield delay(5000);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch (err) {
    console.log(err);
  }
}
function *handleUnfollowConfirm (action: FollowAction) {
  const { unfollows, followings, privateKey } = action.payload;
  const publicKey = generateKey(privateKey);
  try {
    yield put(doUpdateFollowing(unfollows));
    const accounts = compose(
      map((following: any) => following.publicKey),
      filter((following: any) => !includes(following.publicKey, unfollows)),
    )(followings)
    yield call(updateFollowing, publicKey, accounts, privateKey);
    yield delay(4000);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch (err) {
    console.log(err)
  }
}
function *handlePostFetch(action: PostAction) {
  const { publicKey } = action.payload;
  try {
    const posts = yield call(getPosts, publicKey);
    yield put(doPostFetched(posts))
  } catch (err) {
    console.log(err);
  }
}
function *handleUpdateImage(action: UserAction) {
  const { buffer, privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    yield call(updateImage, buffer, publicKey, privateKey);
    yield delay(4000);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch(err) {
    console.log(err);
  }
}
function *handleFollowConfirm(action: FollowAction) {
  const { userPublicKeys, privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    yield call(updateFollowing, publicKey, userPublicKeys, privateKey);
    yield delay(4000);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
    const data = yield call(getFollowing, publicKey);
    yield put(doFollowingFetched(data));
  } catch(err) {
    console.log(err);
  }
}
export {
  handlePrivateKeySubmit,
  handleFollowingFetch,
  handleFollowerFetch,
  handlePostSubmit,
  handleUpdateUsername,
  handleUnfollowConfirm,
  handlePostFetch,
  handleUpdateImage,
  handleFollowConfirm
}
