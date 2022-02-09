import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Post } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post />, div);
  ReactDOM.unmountComponentAtNode(div);
});
