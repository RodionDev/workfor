import * as React from 'react';
import NavigationBarPresenter, { Redirect } from './presenter/navigation-bar.presenter';
interface Props {
  brandName: string,
  searchBarPlaceHolder?: string,
  redirectLinks?: Redirect[];
}
class NavigationBar extends React.Component<Props> {
  render() {
    return <NavigationBarPresenter {...this.props}/>
  }
}
export default NavigationBar;
