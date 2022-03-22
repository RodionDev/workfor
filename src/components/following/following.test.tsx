import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Following from './presenter/following.presenter';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Following data={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
