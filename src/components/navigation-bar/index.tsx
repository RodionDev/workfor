import * as React from 'react';
import NavigationBarPresenter from './presenter/navigation-bar.presenter';
class NavigationBar extends React.Component<{}> {
  render() {
    return <NavigationBarPresenter brandName='Vortex' searchBarPlaceHolder='Place Holder'/>
  }
}
export default NavigationBar;
