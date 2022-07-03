import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrimaryPanelChange, PrimaryPanelAction } from '../../store/primary-panel';
import { ApplicationState } from '../../store';
import { UserState, doUpdateImage, UserAction, doAccountSubmit } from '../../store/user';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  tabChange: (tabId: number) => dispatch(doPrimaryPanelChange(tabId)),
  onUpload: (buffer: Uint8Array, privateKey: string) => dispatch(doUpdateImage(buffer, privateKey)),
  onAccountSubmit: (account: string) => dispatch(doAccountSubmit(account))
});
const mapStateToProps = ({user, post}: ApplicationState) => ({
  image: user.image,
  followingCount: user.followingCount,
  followerCount: user.followerCount,
  feedCount: post.feeds.length,
  postCount: post.posts.length,
  privateKey: user.privateKey
})
interface Props extends UserState {
  tabChange: (tabId: number) => PrimaryPanelAction
  postCount: number
  onUpload: (buffer: Uint8Array, privateKey: string) => UserAction
  onAccountSubmit: (account: string) => UserAction
  feedCount: number
}
class StatusBarContainer extends React.Component<Props, {}> {
  handleTabChange = (tabId: number): void => {
    const { tabChange } = this.props;
    tabChange(tabId);
  }
  handleUpload = (buffer: Uint8Array) => {
    const { onUpload, privateKey } = this.props;
    if (privateKey) {
      onUpload(buffer, privateKey);
    }
  }
  handleAccountSubmit = (account: string) => {
    const { onAccountSubmit } = this.props;
    onAccountSubmit(account);
  }
  render(): JSX.Element {
    const { image, followerCount, postCount, followingCount, feedCount } = this.props;
    return(
      <StatusBarPresenter 
        handleTabChange={this.handleTabChange} 
        image={image} 
        followerCount={followerCount}
        followingCount={followingCount}
        feedCount={feedCount}
        postCount={postCount}
        handleUpload={this.handleUpload}
        handleAccountSubmit={this.handleAccountSubmit}
      />
    );
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer)
