import * as React from 'react';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    Header
  </div>
export default Header;
