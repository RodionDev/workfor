import * as React from 'react';
import StatusBarPresenter from './presenter/status-bar.presenter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrimaryPanelChange, PrimaryPanelAction } from '../../store/primary-panel';
import { ApplicationState } from '../../store';
import { UserState, doUpdateImage, UserAction } from '../../store/user';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  tabChange: (tabId: number) => dispatch(doPrimaryPanelChange(tabId)),
  onUpload: (buffer: Uint8Array, privateKey: string) => dispatch(doUpdateImage(buffer, privateKey))
});
const mapStateToProps = ({user, post}: ApplicationState) => ({
  image: user.image,
  followingCount: user.followingCount,
  followerCount: user.followerCount,
  postCount: post.posts.length,
  privateKey: user.privateKey
})
interface Props extends UserState {
  tabChange: (tabId: number) => PrimaryPanelAction
  postCount: number
  onUpload: (buffer: Uint8Array, privateKey: string) => UserAction
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
  render(): JSX.Element {
    const { image, followerCount, postCount, followingCount } = this.props;
    return(
      <StatusBarPresenter 
        handleTabChange={this.handleTabChange} 
        image={image} 
        followerCount={followerCount}
        followingCount={followingCount}
        postCount={postCount}
        handleUpload={this.handleUpload}
      />
    );
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer)
