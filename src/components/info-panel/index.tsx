import * as React from 'react';
import InfoPanelPresenter from './presenter/info-panel.presenter';
export default class extends React.Component {
  render(): JSX.Element {
    return(
      <InfoPanelPresenter/>
    );
  }
}
