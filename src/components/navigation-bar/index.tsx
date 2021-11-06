import * as React from 'react';
import NavigationBarPresenter, { NavigationBarProps } from './presenter/navigation-bar.presenter';
class NavigationBar extends React.Component<NavigationBarProps> {
  render() {
    return <NavigationBarPresenter {...this.props}/>
  }
}
export default NavigationBar;
