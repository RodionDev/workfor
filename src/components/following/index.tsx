import * as React from 'react';
import FollowingPresenter from './presenter/following.presenter';
interface Props {
  data: any
}
export default class extends React.Component<Props> {
  render() {
    return (
      <FollowingPresenter {...this.props}/>
    )
  }
}
