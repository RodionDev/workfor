import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, ApplicationState } from './store';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/sagas';
const saga = createSagaMiddleware();
const initialState: ApplicationState = {
  primaryPanel: {
    tabId: 0
  },
  user: {
    privateKey: '',
    loading: false,
    followings: []
  },
  follow: {
    followers: [],
    followings: [], 
    loading: false
  }
}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(saga, logger)
)
saga.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
