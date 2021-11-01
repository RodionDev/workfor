import * as React from 'react';
interface Props {
  className: string;
}
const Main: React.SFC<Props> = ({className}) =>
  <div className={className}>
    Main
  </div>
export default Main;
