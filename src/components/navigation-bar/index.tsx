import * as React from 'react';
import NavigationBarPresenter, { Redirect } from './presenter/navigation-bar.presenter';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrivateKeySubmit, UserAction } from '../../store/user';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  privateKeySubmit: (privateKey: string) => dispatch(doPrivateKeySubmit(privateKey))
});
interface Props extends RouteComponentProps {
  brandName: string,
  searchBarPlaceHolder?: string,
  redirectLinks?: Redirect[];
  privateKeySubmit: (privateKey: string) => UserAction
}
class NavigationBar extends React.Component<Props> {
  handleBrandClick = (): void => {
    const { history } = this.props;
    history.push('/');
  }
  handleKeySubmit = (privateKey: string) => {
    const { privateKeySubmit } = this.props;
    privateKeySubmit(privateKey);
  }
  render(): JSX.Element {
    return <NavigationBarPresenter 
            {...this.props} 
            handleBrandClick={this.handleBrandClick} 
            handleKeySubmit={this.handleKeySubmit}
          />
  }
}
export default withRouter(
  connect(undefined, mapDispatchToProps)(NavigationBar)
);
