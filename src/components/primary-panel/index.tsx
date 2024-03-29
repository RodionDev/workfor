import * as React from 'react';
import PrimaryPanelPresenter from './presenter/primary-panel.presenter';
import { PrimaryPanelState } from '../../store/primary-panel';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/store';
const mapStateToProps = ({primaryPanel, user}: ApplicationState) => ({
  tabId: primaryPanel.tabId,
});
interface Props extends PrimaryPanelState {
}
class PrimaryPanelContainer extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <PrimaryPanelPresenter {...this.props}/>
    )
  }
}
export default connect(
  mapStateToProps
)(PrimaryPanelContainer);
