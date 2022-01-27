import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrimaryPanel } from '..';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrimaryPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
