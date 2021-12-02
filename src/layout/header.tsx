import * as React from 'react';
import { NavigationBar, CoverImage } from '../components';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <NavigationBar brandName='Vortex' redirectLinks={[{name: 'Khám phá', link: '/introduction'}]}/>
    <CoverImage imageUrl='https:
  </div>
export default Header;
