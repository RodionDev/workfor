import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InfoPanelPresenter from './presenter/info-panel.presenter';
it('InfoPanel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <InfoPanelPresenter 
    payments={[]}
    handleSave={(username: string) => console.log(username)}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
