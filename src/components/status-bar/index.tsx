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
const mapStateToProps = ({user, follow}: ApplicationState) => ({
  image: user.image,
  followings: user.followings,
  followerCount: user.followerCount
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
    const { image, followings, followerCount } = this.props;
    return(
      <StatusBarPresenter handleTabChange={this.handleTabChange} image={image} followings={followings} followerCount={followerCount}/>
    );
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer)
