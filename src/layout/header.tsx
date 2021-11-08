import * as React from 'react';
import { NavigationBar } from 'src/components';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <NavigationBar/>
  </div>
export default Header;
