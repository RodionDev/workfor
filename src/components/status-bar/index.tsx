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
const mapStateToProps = ({user, post}: ApplicationState) => ({
  image: user.image,
  followingCount: user.followingCount,
  followerCount: user.followerCount,
  postCount: post.posts.length
})
interface Props extends UserState {
  tabChange: (tabId: number) => PrimaryPanelAction
  postCount: number
}
class StatusBarContainer extends React.Component<Props, {}> {
  handleTabChange = (tabId: number): void => {
    const { tabChange } = this.props;
    tabChange(tabId);
  }
  render(): JSX.Element {
    const { image, followerCount, postCount, followingCount } = this.props;
    return(
      <StatusBarPresenter 
      handleTabChange={this.handleTabChange} 
      image={image} 
      followerCount={followerCount}
      followingCount={followingCount}
      postCount={postCount}
      />
    );
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer)
