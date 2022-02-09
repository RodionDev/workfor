import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Follower } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Follower />, div);
  ReactDOM.unmountComponentAtNode(div);
});
