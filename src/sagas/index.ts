import { takeEvery, all } from 'redux-saga/effects';
import { UserActionTypes } from 'src/store/user';
import { handlePrivateKeySubmit, handleFollowingFetch, handleFollowerFetch, handlePostSubmit, handleUpdateUsername, handleUnfollowConfirm, handlePostFetch } from './handler';
import { FollowActionTypes } from 'src/store/follow';
import { PostActionTypes } from 'src/store/post';
function *rootSaga() {
  yield all([
    takeEvery(UserActionTypes.PRIVATE_KEY_SUBMIT, handlePrivateKeySubmit),
    takeEvery(FollowActionTypes.FOLLOWING_FETCH, handleFollowingFetch),
    takeEvery(FollowActionTypes.FOLLOWER_FETCH, handleFollowerFetch),
    takeEvery(PostActionTypes.POST_SUBMIT, handlePostSubmit),
    takeEvery(UserActionTypes.UPDATE_USERNAME, handleUpdateUsername),
    takeEvery(FollowActionTypes.UNFOLLOW_CONFIRM, handleUnfollowConfirm),
    takeEvery(PostActionTypes.POST_FETCH, handlePostFetch)
  ]);
}
export default rootSaga;
