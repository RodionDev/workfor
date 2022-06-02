export const enum PostActionTypes {
  POST_SUBMIT = '@@post/POST_SUBMIT',
  POST_FETCH = '@@post/POST_FETCH',
  POST_FETCHING = '@@post/POST_FETCH',
  POST_FETCHED = '@@post/POST_FETCHED',
  POST_REACTION = '@@post/REACTION',
}
export interface PostState {
  readonly posts: any[],
  loading: boolean
}
