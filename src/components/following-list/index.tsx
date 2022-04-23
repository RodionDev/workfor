import * as React from 'react';
import { Dispatch } from 'redux';
import FollowingListPresenter from './presenter/following-list.presenter';
import { doFollowingFetch, FollowAction, doUnfollowConfirm } from '../../store/follow';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDisplay: (publicKey: string) => dispatch(doFollowingFetch(publicKey)),
  onUnfollowConfirm: (unfollows: string[], followings: any[], privateKey: string) => dispatch(doUnfollowConfirm(unfollows, followings, privateKey))
})
const mapStateToProps = ({user, follow}: ApplicationState) => ({
  publicKey:  user.publicKey,
  privateKey: user.privateKey ? user.privateKey : '',
  followings: follow.followings,
  unfollows: follow.unfollows
})
interface Props {
  onDisplay: (publicKey: string) => FollowAction;
  onUnfollowConfirm: (unfollows: string[], followings: any[], privateKey) => FollowAction
  followings: any[]
  unfollows: string[]
  privateKey: string
  publicKey: string
}
class FollowingList extends React.Component<Props> {
  handleUnfollowConfirm = () => {
    const { unfollows, followings, onUnfollowConfirm, privateKey } = this.props;
    onUnfollowConfirm(unfollows, followings, privateKey);
  }
  render() {
    const { followings, unfollows } = this.props;
    return(
      <FollowingListPresenter followings={followings} unfollows={unfollows} handleUnfollowConfirm={this.handleUnfollowConfirm}/>
    );
  }
  componentDidMount() {
    const { onDisplay, publicKey } = this.props;
    onDisplay(publicKey);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowingList)
