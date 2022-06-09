import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FollowPanel } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowPanel/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
