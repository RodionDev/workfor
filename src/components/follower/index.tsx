import * as React from 'react';
import FollowerPresenter from './presenter/follower.presenter';
interface Props {
  data: any
}
export default class extends React.Component<Props> {
  render() {
    return (
      <FollowerPresenter {...this.props }/>
    )
  }
}
