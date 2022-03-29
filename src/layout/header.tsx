import * as React from 'react';
import { NavigationBar, CoverImage, StatusBar } from '../components';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <NavigationBar followings={[]} brandName='Vortex' redirectLinks={[{name: 'Khám phá', link: '/introduction'}]}/>
    <CoverImage/>
    <StatusBar/>
  </div>
export default Header;
