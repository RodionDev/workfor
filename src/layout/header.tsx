import * as React from 'react';
import { Sample } from '../components';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <Sample containerProp='Sample Here'/>
  </div>
export default Header;
