import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FollowerList } from '..';
it('FollowerList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowerList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
