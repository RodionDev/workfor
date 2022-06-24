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
const doPostReaction = (post: any, reactContent: any): PostAction => ({
  type: PostActionTypes.POST_REACTION,
  payload: {
    post,
    reactContent
  }
})
const doPostComment = (post: any, commentContent: any): PostAction => ({
  type: PostActionTypes.POST_COMMENT,
  payload: {
    post,
    commentContent
  }
})
const doPostViewComment = (selectedPost: any): PostAction => ({
  type: PostActionTypes.POST_VIEWCOMMENT,
  payload: {
    selectedPost
  }
})
const doFetchNewfeeds = (): PostAction => ({
  type: PostActionTypes.FETCH_NEWFEEDS,
  payload: {
  }
})
const doAddNewfeeds = (feeds: any[]) => ({
  type: PostActionTypes.ADD_NEWFEEDS,
  payload: {
    feeds
  }
})
const doNewfeedReaction = (feed: any, reactContent: any) => ({
  type: PostActionTypes.NEWFEED_REACT,
  payload: {
    feed,
    reactContent
  }
})
const doNewfeedComment = (feed: any, commentContent: any) => ({
  type: PostActionTypes.NEWFEED_COMMENT,
  payload: {
    feed,
    commentContent
  }
})
export {
  doPostSubmit,
  doPostFetch,
  doPostFetched,
  doPostReaction,
  doPostComment,
  doPostViewComment,
  doFetchNewfeeds,
  doAddNewfeeds,
  doNewfeedComment,
  doNewfeedReaction
}
