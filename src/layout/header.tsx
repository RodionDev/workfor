import * as React from 'react';
import { NavigationBar, CoverImage, StatusBar } from '../components';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <NavigationBar brandName='Vortex' redirectLinks={[{name: 'Khám phá', link: '/introduction'}]}/>
    <CoverImage imageUrl='http:
    <StatusBar/>
  </div>
export default Header;
