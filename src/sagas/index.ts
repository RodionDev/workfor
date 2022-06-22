import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from 'src/store/user';
import { 
  handlePrivateKeySubmit, 
  handleFollowingFetch, 
  handleFollowerFetch, 
  handlePostSubmit, 
  handleUpdateUsername, 
  handleUnfollowConfirm, 
  handlePostFetch, 
  handleUpdateImage, 
  handleFollowConfirm,
  handlePostReact,
  handleComment,
  handleFetchNewfeeds
} from './handler';
import { FollowActionTypes } from 'src/store/follow';
import { PostActionTypes } from 'src/store/post';
function *rootSaga() {
  yield all([
    takeEvery(UserActionTypes.PRIVATE_KEY_SUBMIT, handlePrivateKeySubmit),
    takeLatest(FollowActionTypes.FOLLOWING_FETCH, handleFollowingFetch),
    takeLatest(FollowActionTypes.FOLLOWER_FETCH, handleFollowerFetch),
    takeEvery(PostActionTypes.POST_SUBMIT, handlePostSubmit),
    takeEvery(UserActionTypes.UPDATE_USERNAME, handleUpdateUsername),
    takeEvery(FollowActionTypes.UNFOLLOW_CONFIRM, handleUnfollowConfirm),
    takeLatest(PostActionTypes.POST_FETCH, handlePostFetch),
    takeEvery(UserActionTypes.UPDATE_IMAGE, handleUpdateImage),
    takeLatest(FollowActionTypes.FOLLOW_CONFIRM, handleFollowConfirm),
    takeEvery(PostActionTypes.POST_REACTION, handlePostReact),
    takeEvery(PostActionTypes.POST_COMMENT, handleComment),
    takeLatest(PostActionTypes.FETCH_NEWFEEDS, handleFetchNewfeeds)
  ]);
}
export default rootSaga;
