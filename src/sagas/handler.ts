import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { UserAction, doPrivateKeyVerifying, doPrivateKeyVerifyFailed, doPrivateKeyVerifySuccess, doPrivateKeySubmit, doUpdateUsernameDone, doUpdateFollowing, doPaymentAdd, doPaymentFetch } from '../store/user';
import { getAccountSummary, getUserInfos, getFollower, postContent, updateUsername, updateFollowing, getPosts, getFollowing, updateImage, getAllUsers, updateReact, getNewFeeds, getPayments, createAccount, paymentSubmit } from '../api'
import { generateKey } from './helper';
import { doFollowingFetching, FollowAction, doFollowingFetched, doFollowerFetching, doFollowerFetched, doFollowerFetch, doFollowingFetch, doFollowAddUser } from '../store/follow';
import { PostAction, doPostFetch, doPostFetched, doAddNewfeeds, doFetchNewfeeds } from '../store/post';
import { compose, map, filter } from 'ramda';
import includes from 'ramda/es/includes';
import { toast } from 'react-toastify'
function *handlePrivateKeySubmit(action: UserAction) {
  yield put(doPrivateKeyVerifying());
  const { privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    console.log(publicKey);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
    window.sessionStorage.setItem('privateKey', privateKey);
    window.sessionStorage.setItem('publicKey', publicKey);
    window.sessionStorage.setItem('displayName', accountSummary.result.displayName);
    yield put(doPostFetch(publicKey));
    yield put(doPaymentFetch());
    yield put(doFetchNewfeeds());
    const allUsers = yield call(getAllUsers);
    yield put(doFollowAddUser(allUsers));
    yield put(doFollowerFetch(publicKey));
    yield put(doFollowingFetch(publicKey));
  } catch (err) {
    yield put(doPrivateKeyVerifyFailed(privateKey));
    toast.error('Invalid Private Key', {
      position: toast.POSITION.BOTTOM_LEFT
    });
  }
}
function *handleFollowingFetch(action: FollowAction) {
  yield put(doFollowingFetching());
  const { publicKey } = action.payload;
  try {
    const data = yield call(getFollowing, publicKey);
    yield put(doFollowingFetched(data));
    const allUsers = yield call(getAllUsers);
    yield put(doFollowAddUser(allUsers));
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
    yield delay(5000);
    yield put(doPostFetch(publicKey))
  } catch (err) {
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
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
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
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
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
    console.log(err)
  }
}
function *handlePostFetch(action: PostAction) {
  const { publicKey } = action.payload;
  try {
    const posts = yield call(getPosts, publicKey);
    yield put(doPostFetched(posts))
  } catch (err) {
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
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
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
    console.log(err);
  }
}
function *handleFollowConfirm(action: FollowAction) {
  const { userPublicKeys, privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    console.log(publicKey);
    yield call(updateFollowing, publicKey, userPublicKeys, privateKey);
    yield delay(4000);
    const data = yield call(getFollowing, publicKey);
    yield put(doFollowingFetched(data));
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch(err) {
    toast.error('Something Wrong Happened', {
      position: toast.POSITION.BOTTOM_LEFT
    });
    console.log(err);
  }
}
function *handlePostReact(action: PostAction) {
  const { post, reactContent } = action.payload;
  const react = {
    object: post.dataHash,
    content: reactContent
  }
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = generateKey(privateKey);
      yield call(updateReact, react, publicKey, privateKey);
      yield delay(4000);
      const accountSummary = yield call(getAccountSummary, publicKey);
      yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
    } catch (err) {
      toast.error('Something Wrong Happened', {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.log(err);
    }
  }
}
function *handleComment(action: PostAction) {
  const { post, commentContent } = action.payload;
  const react = {
    object: post.dataHash,
    content: {
      type: 1,
      text: commentContent
    }
  }
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = generateKey(privateKey);
      yield call(updateReact, react, publicKey, privateKey);
      yield delay(4000);
      yield put(doPostFetch(publicKey));
      const accountSummary = yield call(getAccountSummary, publicKey);
      yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
    } catch (err) {
      toast.error('Something Wrong Happened', {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.log(err);
    } 
  }
}
function *handleFetchNewfeeds(action: PostAction) {
  const publicKey = window.sessionStorage.getItem('publicKey');
  if (publicKey) {
    try {
      const data = yield call(getNewFeeds, publicKey);
      yield put(doAddNewfeeds(data));
    } catch (err) {
      toast.error('Something Wrong Happened', {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.log(err);
    }
  }
}
function *handleFeedReact(action: PostAction) {
  const { feed, reactContent } = action.payload;
  const react = {
    object: feed.dataHash,
    content: reactContent
  }
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = generateKey(privateKey);
      yield call(updateReact, react, publicKey, privateKey);
    } catch (err) {
      toast.error('Something Wrong Happened', {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.log(err);
    }
  }
}
function *handlePaymenFetch(action: UserAction) {
  const publicKey = window.sessionStorage.getItem('publicKey');
  if (publicKey) {
    try {
      const payments = yield call(getPayments, publicKey);
      yield put(doPaymentAdd(payments));
    } catch (err) {
      toast.error('Something Wrong Happened', {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.log(err);
    }
  }
}
function *handleFeedComment(action: PostAction) {
  const { feed, commentContent } = action.payload;
  const react = {
    object: feed.dataHash,
    content: {
      type: 1,
      text: commentContent
    }
  }
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = generateKey(privateKey);
      yield call(updateReact, react, publicKey, privateKey);
      yield delay(4000);
      yield put(doFetchNewfeeds());
    } catch (err) {
      console.log(err);
    } 
  }
}
function *handleAccountSubmit(action: UserAction) {
  const { account } = action.payload;
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = window.sessionStorage.getItem('publicKey');
      yield call(createAccount, account,  publicKey, privateKey);
    } catch(err) {  
      console.log(err);
    }
  }
}
function *handlePaymentSubmit(action: UserAction) {
  const { account, amount } = action.payload;
  const privateKey = window.sessionStorage.getItem('privateKey');
  if (privateKey) {
    try {
      const publicKey = window.sessionStorage.getItem('publicKey');
      yield call(paymentSubmit, account, amount, publicKey, privateKey);
      yield delay(4000);
      yield put(doPaymentFetch());
      const accountSummary = yield call(getAccountSummary, publicKey);
      yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
    } catch(err) {  
      console.log(err);
    }
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
  handleFollowConfirm,
  handlePostReact,
  handleComment,
  handleFetchNewfeeds,
  handleFeedReact,
  handleFeedComment,
  handlePaymenFetch,
  handleAccountSubmit,
  handlePaymentSubmit
}
