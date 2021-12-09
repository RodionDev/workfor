import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationBar } from '..';
it('Navigation bar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NavigationBar brandName='Vortex' />
    </Router>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});
