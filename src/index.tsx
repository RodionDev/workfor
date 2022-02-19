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
const initialState: ApplicationState = {
  primaryPanel: {
    tabId: 0
  }
}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
