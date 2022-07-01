import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PostPanel } from '..';
import PostPanelPresenter from './presenter/post-panel.presenter'
it('StatusBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostPanelPresenter
 onContentSubmit = {(content: string)=>console.log(content)}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
