import { Action } from 'redux';
import { PostActionTypes } from './types';
export interface PostAction extends Action {
  payload: any
}
const doPostSubmit = (publicKey: string, content: string, privateKey: string): PostAction => ({
  type: PostActionTypes.POST_SUBMIT,
  payload: {
    content,
    publicKey,
    privateKey
  }
});
const doPostFetch = (publicKey: string): PostAction => ({
  type: PostActionTypes.POST_FETCH,
  payload: {
    publicKey
  }
})
const doPostFetched = (posts: any[]): PostAction => ({
  type: PostActionTypes.POST_FETCHED,
  payload: {
    posts
  }
})
export {
  doPostSubmit,
  doPostFetch,
  doPostFetched
}
