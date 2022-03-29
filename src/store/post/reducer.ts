import { Reducer } from 'redux';
import { PostActionTypes, PostState } from './types';
import { PostAction } from './actions';
const initialState: PostState = {
  posts: []
}
const applyPostSubmit = (state: PostState, action: PostAction): PostState => ({
  ...state
})
const reducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
  switch(action.type) {
    case PostActionTypes.POST_SUBMIT: {
      return applyPostSubmit(state, action)
    }
    default: return state;
  }
}
export {
  reducer as postReducer
}
