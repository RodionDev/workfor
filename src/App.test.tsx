import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, ApplicationState } from './store';
const initialState: ApplicationState = {
  primaryPanel: {
    tabId: 0
  },
  user: {
    privateKey: '',
    loading: false,
  },
  follow: {
    followers: [],
    followings: [],
    loading: false,
    unfollows: [],
    follows: [],
    userCanFollow: []
  },
  post: {
    posts: [],
    loading: false,
    selectedPost: null
  }
}
const store = createStore(
  rootReducer,
  initialState,
)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
