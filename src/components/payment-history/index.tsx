import * as React from 'react';
import PaymentHistoryPresenter from './presenter/payment-history.presenter';
import { ApplicationState } from '../../store';
import { Dispatch } from 'redux';
import { doPaymentFetch, UserAction } from '../../store/user';
import { connect } from 'react-redux';
const mapStateToProps = ({user}: ApplicationState) => ({
  payments: user.payments ? user.payments : []
});
interface Props {
  payments: any[]
}
class PaymentHistory extends React.Component<Props> {
  render() {
    const { payments } = this.props;
    return <PaymentHistoryPresenter payments={payments}/>
  }
}
export default connect(
  mapStateToProps,
)(PaymentHistory);
