import * as React from 'react';
import { Dispatch } from 'redux';
import FollowingListPresenter from './presenter/following-list.presenter';
import { doFollowingFetch, FollowAction } from '../../store/follow';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDisplay: (publicKeys: string[]) => dispatch(doFollowingFetch(publicKeys))
})
const mapStateToProps = ({user, follow}: ApplicationState) => ({
  publicKeys: user.followings ? user.followings : [],
  followings: follow.followings,
  unfollows: follow.unfollows
})
interface Props {
  onDisplay: (publicKeys: string[]) => FollowAction;
  publicKeys: string[],
  followings: any[],
  unfollows: string[]
}
class FollowingList extends React.Component<Props> {
  render() {
    const { followings, unfollows } = this.props;
    return(
      <FollowingListPresenter followings={followings} unfollows={unfollows}/>
    );
  }
  componentDidMount() {
    const { onDisplay, publicKeys } = this.props;
    onDisplay(publicKeys);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowingList)
