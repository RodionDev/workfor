import * as React from 'react';
import InfoPanelPresenter from './presenter/info-panel.presenter';
import { ApplicationState } from '../../store';
import { UserState, doUpdateUsername, UserAction } from '../../store/user';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
const mapStateToProps = ({user}: ApplicationState) => ({
  balance: user.balance,
  createdAt: user.createdAt,
  energy: user.energy,
  displayName: user.displayName,
  loading: user.loading,
  publicKey: user.publicKey,
  privateKey: user.privateKey
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSave: (privateKey: string, username: string) => dispatch(doUpdateUsername(privateKey, username))
})
interface Props extends UserState {
  onSave: (privateKey: string, username: string) => UserAction
}
class InfoPanel extends React.Component<Props> {
  handleSave = (username: string) => {
    const { onSave, privateKey, displayName } = this.props;
    if (privateKey && username !== displayName) {
      onSave(privateKey, username);
    }
  }
  render(): JSX.Element {
    const { onSave, ...rest } = this.props;
    return(
      <InfoPanelPresenter {...rest} handleSave={this.handleSave}/>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPanel);
