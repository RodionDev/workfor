import { Reducer } from 'redux';
import { PostActionTypes, PostState } from './types';
import { PostAction } from './actions';
import { generateKey } from '../../sagas/helper';
import { propEq, update, findIndex, append, remove, reject } from 'ramda';
const initialState: PostState = {
  posts: [],
  loading: false,
  selectedPost: null,
  feeds: []
}
const applyPostSubmit = (state: PostState, action: PostAction): PostState => ({
  ...state
})
const applyPostFetch = (state: PostState, action: PostAction): PostState => ({
  ...state,
  loading: true
})
const applyPostFetched = (state: PostState, action: PostAction): PostState => ({
  ...state,
  loading: false,
  posts: action.payload.posts
})
const applyPostReaction  = (state: PostState, action: PostAction): PostState => {
  const { post, reactContent } = action.payload;
  const privateKey = window.sessionStorage.getItem('privateKey');
  const publicKey = generateKey(privateKey);
  const react = { 
    account: publicKey,
    ...reactContent,
    time: Date.now()
  };
  const replaceIndex = findIndex(propEq('dataHash', post.dataHash), state.posts);
  switch(react.type) {
    case 1: {
      const updatedPost = update(
        replaceIndex,
         {...state.posts[replaceIndex],reacts: [...state.posts[replaceIndex].reacts, react]},
          state.posts);
      return {
        ...state,
        posts: updatedPost
      }
    }
    case 2: {
      const filterdReacts = state.posts[replaceIndex].reacts.filter(react => react.type === 2);
      const reactIndex = findIndex(propEq('account', publicKey), filterdReacts);
      if (reactIndex === -1) {
        const updatedPost = update(
          replaceIndex,
          { ...state.posts[replaceIndex], reacts: [...state.posts[replaceIndex].reacts, react]},
          state.posts
        )
        return {
          ...state,
          posts: updatedPost
        }
      } else {
        const elseReacts = reject<any>(react => react.type === 2, state.posts[replaceIndex].reacts);
        const reacts = update(
          reactIndex,
          react.reaction === filterdReacts[reactIndex].reaction ? { ...react, reaction: 0} : react,
          filterdReacts
        );
        const updatedPost = update(
          replaceIndex,
          { ...state.posts[replaceIndex], reacts: [...reacts, ...elseReacts] },
          state.posts
        )
        return {
          ...state,
          posts: updatedPost
        }
      }
    }
    default: return state;
  }
}
const applyPostViewComment = (state: PostState, action: PostAction): PostState => ({
  ...state,
  selectedPost: action.payload.selectedPost
})
const applyPostComment = (state: PostState, action: PostAction): PostState => {
  const displayName = window.sessionStorage.getItem('displayName');
  const publicKey = window.sessionStorage.getItem('publicKey');
  return {
    ...state,
    selectedPost: {
      ...state.selectedPost,
      reacts: [...state.selectedPost.reacts, { account: publicKey, displayName, time: Date.now(), type: 1, text: action.payload.commentContent }]
    }
  }
}
const applyAddNewfeeds = (state: PostState, action: PostAction): PostState => {
  return {
    ...state,
    feeds: action.payload.feeds
  }
}
const applyFetchNewfeeds = (state: PostState, action: PostAction): PostState => {
  return {
    ...state,
    loading: true
  }
}
const reducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
  switch(action.type) {
    case PostActionTypes.POST_SUBMIT: {
      return applyPostSubmit(state, action)
    }
    case PostActionTypes.POST_FETCH: {
      return applyPostFetch(state, action);
    }
    case PostActionTypes.POST_FETCHED: {
      return applyPostFetched(state, action);
    }
    case PostActionTypes.POST_REACTION: {
      return applyPostReaction(state, action);
    }
    case PostActionTypes.POST_VIEWCOMMENT: {
      return applyPostViewComment(state, action);
    }
    case PostActionTypes.POST_COMMENT: {
      return applyPostComment(state, action);
    }
    case PostActionTypes.ADD_NEWFEEDS: {
      return applyAddNewfeeds(state, action);
    }
    case PostActionTypes.FETCH_NEWFEEDS: {
      return applyFetchNewfeeds(state, action);
    }
    default: return state;
  }
}
export {
  reducer as postReducer
}
