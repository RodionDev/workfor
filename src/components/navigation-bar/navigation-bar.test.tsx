import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NavigationBar } from '..';
it('Navigation bar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationBar brandName='Vortex' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
