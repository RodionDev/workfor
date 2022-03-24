import { takeEvery, all } from 'redux-saga/effects';
import { UserActionTypes } from 'src/store/user';
import { handlePrivateKeySubmit, handleFollowingFetch, handleFollowerFetch } from './handler';
import { FollowActionTypes } from 'src/store/follow';
function *rootSaga() {
  yield all([
    takeEvery(UserActionTypes.PRIVATE_KEY_SUBMIT, handlePrivateKeySubmit),
    takeEvery(FollowActionTypes.FOLLOWING_FETCH, handleFollowingFetch),
    takeEvery(FollowActionTypes.FOLLOWER_FETCH, handleFollowerFetch)
  ]);
}
export default rootSaga;
