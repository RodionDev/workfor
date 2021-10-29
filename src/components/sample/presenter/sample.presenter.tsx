import * as React from 'react';
interface Props {
  example?: string
}
const SamplePresenter: React.SFC<Props> = ({example}) => 
  <p>{example}</p>
export default SamplePresenter;
