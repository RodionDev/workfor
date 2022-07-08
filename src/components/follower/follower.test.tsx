import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Follower  from './presenter/follower.presenter';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Follower data={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
