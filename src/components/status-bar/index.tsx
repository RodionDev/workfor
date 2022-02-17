import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
class StatusBarContainer extends React.Component {
  render(): JSX.Element {
    return(
      <StatusBarPresenter/>
    );
  }
};
export default StatusBarContainer;
