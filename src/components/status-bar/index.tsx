import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrimaryPanelChange, PrimaryPanelAction } from '../../store/primary-panel';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  tabChange: (tabId: number) => dispatch(doPrimaryPanelChange(tabId))
});
interface Props {
  tabChange: (tabId: number) => PrimaryPanelAction
}
class StatusBarContainer extends React.Component<Props, {}> {
  handleTabChange = (tabId: number): void => {
    const { tabChange } = this.props;
    tabChange(tabId);
  }
  render(): JSX.Element {
    return(
      <StatusBarPresenter handleTabChange={this.handleTabChange}/>
    );
  }
};
export default connect(
  undefined,
  mapDispatchToProps
)(StatusBarContainer)
