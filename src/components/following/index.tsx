import * as React from 'react';
import FollowingPresenter from './presenter/following.presenter';
import { Dispatch } from 'redux';
import { doUnfollow, FollowAction } from '../../store/follow';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
const mapDispathToProps = (dispatch: Dispatch) => ({
  onUnfollow: (userPublicKey: string) => dispatch(doUnfollow(userPublicKey)),
})
const mapStateToProps = ({follow}: ApplicationState) => ({
  unfollows: follow.unfollows
})
interface Props {
  data: any,
  onUnfollow: (userPublicKey: string) => FollowAction
  unfollows: string[]
}
class Following extends React.Component<Props> {
  handleUnfollowClick = (userPublicKey: string) => {
    const { onUnfollow } = this.props;
    onUnfollow(userPublicKey)
  }
  render() {
    const { data, onUnfollow, unfollows } = this.props;
    return (
      <FollowingPresenter data={data} handleUnfollowClick={this.handleUnfollowClick} unfollows={unfollows}/>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Following)
