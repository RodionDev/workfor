import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StatusBar } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
