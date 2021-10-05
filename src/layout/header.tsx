import * as React from 'react';
interface HeaderProps {
  className: string;
}
const Header: React.SFC<HeaderProps> = ({className}) => 
  <div className={className}>
    Header
  </div>
export default Header;
