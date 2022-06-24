import * as React from 'react';
import NavigationBarPresenter, { Redirect } from './presenter/navigation-bar.presenter';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doPrivateKeySubmit, UserAction, UserState, doUserLogout } from '../../store/user';
import { ApplicationState } from '../../store';
const mapStateToProps = ({user}: ApplicationState) => ({
  privateKey: user.privateKey,
  loading: user.loading,
  displayName: user.displayName,
  publicKey: user.publicKey
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  privateKeySubmit: (privateKey: string) => dispatch(doPrivateKeySubmit(privateKey)),
  logout: () => dispatch(doUserLogout())
});
interface Props extends RouteComponentProps, UserState {
  brandName: string,
  searchBarPlaceHolder?: string,
  redirectLinks?: Redirect[];
  privateKeySubmit: (privateKey: string) => UserAction
  logout: () => UserAction
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
  handleLogout = () => {
    const { logout } = this.props;
    logout();
  }
  render(): JSX.Element {
    return <NavigationBarPresenter 
            {...this.props} 
            handleBrandClick={this.handleBrandClick} 
            handleKeySubmit={this.handleKeySubmit}
            handleLogout={this.handleLogout}
          />
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
);
