import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
export default class extends React.Component {
  render(): JSX.Element {
    return(
      <StatusBarPresenter/>
    );
  }
}
