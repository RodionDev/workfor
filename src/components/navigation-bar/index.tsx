import * as React from 'react';
import NavigationBarPresenter, { Redirect } from './presenter/navigation-bar.presenter';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps {
  brandName: string,
  searchBarPlaceHolder?: string,
  redirectLinks?: Redirect[];
}
class NavigationBar extends React.Component<Props> {
  handleBrandClick = (): void => {
    const { history } = this.props;
    history.push('/');
  };
  render(): JSX.Element {
    return <NavigationBarPresenter {...this.props} handleBrandClick={this.handleBrandClick}/>
  }
}
export default withRouter(NavigationBar);
