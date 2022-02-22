import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InfoPanel } from '..';
it('InfoPanel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
