import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PrimaryPanelPresenter from './presenter/primary-panel.presenter';
it('PrimaryPanel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrimaryPanelPresenter tabId={1}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
