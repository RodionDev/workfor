import * as React from 'react';
import { Sample } from '../components';
interface HeaderProps {
  className: string;
}
const Header: React.SFC<HeaderProps> = ({className}) => 
  <div className={className}>
    <Sample containerProp='Sample Here'/>
  </div>
export default Header;
