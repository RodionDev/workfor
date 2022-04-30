import * as React from 'react';
import FollowPanelPresenter from './presenter/follow-panel.presenter';
import { Dispatch } from 'redux';
import { doFollow, FollowAction } from '../../store/follow/actions';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
const mapStateToProps = ({follow, user}: ApplicationState) => ({
  privateKey: user.privateKey,
  follows: follow.follows
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFollow: (userPublicKey: string) => dispatch(doFollow(userPublicKey))
})
interface Props {
  onFollow: (userPublicKey: string) => FollowAction
  privateKey: string
  follows: string[]
}
class FollowPanel extends React.Component<Props> {
  handleFollow = (userPublicKey: string) => {
    const { onFollow } = this.props;
    onFollow(userPublicKey);
  }
  render() {
    const { follows } = this.props;
    return <FollowPanelPresenter 
              handleFollow={this.handleFollow}
              follows={follows}
            />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowPanel);
