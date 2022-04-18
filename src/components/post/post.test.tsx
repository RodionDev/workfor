import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PostPresenter from './presenter/post.presenter';
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostPresenter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
