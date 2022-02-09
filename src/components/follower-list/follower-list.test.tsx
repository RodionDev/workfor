import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FollowerList } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowerList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
