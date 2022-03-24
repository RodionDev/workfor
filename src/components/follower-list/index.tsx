import * as React from 'react';
import FollowerListPresenter from './presenter/follower-list.presenter';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { doFollowerFetch, FollowAction } from '../../store/follow';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDisplay: (publicKey: string) => dispatch(doFollowerFetch(publicKey))
})
const mapStateToProps = ({user, follow}: ApplicationState) => ({
  publicKey: user.publicKey ? user.publicKey : '',
  followers: follow.followers
})
interface Props {
  onDisplay: (publicKey: string) => FollowAction,
  publicKey: string,
  followers: any[],
}
class FollowerList extends React.Component<Props> {
  render() {
    const { followers } = this.props;
    return(
      <FollowerListPresenter followers={followers}/>
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
)(FollowerList)
