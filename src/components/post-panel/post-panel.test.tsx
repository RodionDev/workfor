import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PostPanel } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostPanel/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
