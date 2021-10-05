import * as React from 'react';
interface MainProps {
  className: string;
}
const Main: React.SFC<MainProps> = ({className}) =>
  <div className={className}>
    Main
  </div>
export default Main;
