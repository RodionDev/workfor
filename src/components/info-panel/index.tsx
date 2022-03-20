import * as React from 'react';
import InfoPanelPresenter from './presenter/info-panel.presenter';
import { ApplicationState } from '../../store';
import { UserState } from '../../store/user';
import { connect } from 'react-redux';
const mapStateToProps = ({user}: ApplicationState) => ({
  balance: user.balance,
  createdAt: user.createdAt,
  energy: user.energy,
  displayName: user.displayName,
  loading: user.loading,
  publicKey: user.publicKey,
})
class InfoPanel extends React.Component<UserState> {
  render(): JSX.Element {
    return(
      <InfoPanelPresenter {...this.props}/>
    );
  }
}
export default connect(
  mapStateToProps
)(InfoPanel);
