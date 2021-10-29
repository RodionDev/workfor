import * as React from 'react';
import SamplePresenter from '../presenter/sample.presenter';
interface Props {
  containerProp: string
}
class Sample extends React.Component<Props> {
  render() {
    const { containerProp } = this.props;
    return (
      <SamplePresenter example={containerProp}/>
    )
  }
}
export default Sample;
