import * as React from 'react';
import FollowPanelPresenter from './presenter/follow-panel.presenter';
import { Dispatch } from 'redux';
import { doFollow, FollowAction, doFollowConfirm, doFollowCanFollowUpdate } from '../../store/follow/actions';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
const mapStateToProps = ({follow, user}: ApplicationState) => ({
  privateKey: user.privateKey,
  publicKey: user.publicKey,
  follows: follow.follows,
  userCanFollow: follow.userCanFollow,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFollow: (userPublicKey: string) => dispatch(doFollow(userPublicKey)),
  onFollowConfirm: (userPublicKeys: string[], privateKey: string) => dispatch(doFollowConfirm(userPublicKeys, privateKey)),
  onUpdateCanFollow: (userPublicKeys: string[]) => dispatch(doFollowCanFollowUpdate(userPublicKeys))
})
interface Props {
  onFollow: (userPublicKey: string) => FollowAction
  onFollowConfirm: (userPublicKeys: string[], privateKey: string) => FollowAction
  onUpdateCanFollow: (userPublicKeys: string[]) => FollowAction
  privateKey: string
  follows: string[]
  userCanFollow: any[]
  publicKey: string
}
class FollowPanel extends React.Component<Props> {
  handleFollow = (userPublicKey: string) => {
    const { onFollow } = this.props;
    onFollow(userPublicKey);
  }
  handleFollowConfirm = () => {
    const { follows, privateKey, onFollowConfirm, onUpdateCanFollow } = this.props;
    onUpdateCanFollow(follows);
    onFollowConfirm(follows, privateKey);
  }
  render() {
    const { userCanFollow, publicKey } = this.props;
    return <FollowPanelPresenter 
              handleFollow={this.handleFollow}
              userCanFollow={userCanFollow}
              publicKey={publicKey}
              handleFollowConfirm={this.handleFollowConfirm}
            />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowPanel);
