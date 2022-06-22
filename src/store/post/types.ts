export const enum PostActionTypes {
  POST_SUBMIT = '@@post/POST_SUBMIT',
  POST_FETCH = '@@post/POST_FETCH',
  POST_FETCHING = '@@post/POST_FETCH',
  POST_FETCHED = '@@post/POST_FETCHED',
  POST_REACTION = '@@post/REACTION',
  POST_COMMENT = '@@post/POST_COMMENT',
  POST_VIEWCOMMENT = '@@post/POST_VIEWCOMMENT',
  FETCH_NEWFEEDS = '@@post/FETCH_NEWFEEDS',
  ADD_NEWFEEDS = '@@post/ADD_NEWFEEDS'
}
export interface PostState {
  readonly posts: any[]
  loading: boolean
  selectedPost: any
  feeds: any[]
}
