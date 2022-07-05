import * as React from 'react';
import { NavigationBar, CoverImage, StatusBar } from '../components';
import { ToastContainer } from 'react-toastify';
interface Props {
  className: string;
}
const Header: React.SFC<Props> = ({className}) => 
  <div className={className}>
    <NavigationBar brandName='Vortex' redirectLinks={[{name: 'Khám phá', link: '/introduction'}]}/>
    <ToastContainer
      className='toast-container'
      autoClose={5000}
      position='top-right'
      hideProgressBar={false}
      closeOnClick={true}
    />
    <CoverImage/>
    <StatusBar/>
  </div>
export default Header;
