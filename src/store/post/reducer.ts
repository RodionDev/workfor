import { Reducer } from 'redux';
import { PostActionTypes, PostState } from './types';
import { PostAction } from './actions';
import { Post } from 'src/components';
const initialState: PostState = {
  posts: [],
  loading: false
}
const applyPostFetch = (state: PostState, action: PostAction): PostState => ({
  ...state,
  loading: true
})
const applyPostFetched = (state: PostState, action: PostAction): PostState => ({
  ...state,
  loading: false,
  posts: action.payload.posts
})
const reducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
  switch(action.type) {
    case PostActionTypes.POST_FETCH: {
      return applyPostFetch(state, action);
    }
    case PostActionTypes.POST_FETCHED: {
      return applyPostFetched(state, action);
    }
    default: return state;
  }
}
export {
  reducer as postReducer
}
