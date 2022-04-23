import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StatusBarPresenter from './presenter/status-bar.presenter';
const dummy = () => {};
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBarPresenter handleTabChange={dummy}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
