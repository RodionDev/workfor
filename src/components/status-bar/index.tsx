import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrimaryPanelChange, PrimaryPanelAction } from '../../store/primary-panel';
import { ApplicationState } from '../../store';
import { UserState } from '../../store/user';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  tabChange: (tabId: number) => dispatch(doPrimaryPanelChange(tabId))
});
const mapStateToProps = ({user}: ApplicationState) => ({
  image: user.image
})
interface Props extends UserState {
  tabChange: (tabId: number) => PrimaryPanelAction;
}
class StatusBarContainer extends React.Component<Props, {}> {
  handleTabChange = (tabId: number): void => {
    const { tabChange } = this.props;
    tabChange(tabId);
  }
  render(): JSX.Element {
    const { image } = this.props;
    return(
      <StatusBarPresenter handleTabChange={this.handleTabChange} image={image}/>
    );
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer)
