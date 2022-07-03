import * as React from 'react';
import styles from './payment-history.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Divider } from '@material-ui/core';
import * as moment from 'moment';
interface Props extends WithStyles<typeof styles> {
  payments: any[];
}
const PaymentHistoryPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes, payments } = this.props;
      return (
        <div>
          <Paper elevation={0} square={true}>
            <Grid container={true}>
              <Grid item={true} xs={12}>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.panelName}
                >
                  Giao dịch
                </Typography>
                <Divider variant='fullWidth' />
              </Grid>
              <div className={classes.list}>
                <Grid container={true} spacing={16}>
                  {payments.map((payment, index) => (
                    <Grid
                      key={index}
                      item={true}
                      xs={12}
                      className={classes.payment}
                    >
                      <Typography noWrap={true} variant='body2' className={classes.account}>
                        { payment.params.address }
                      </Typography>
                      <Typography variant='body2' align='left' className={classes.amount}>
                        Số tiền: { payment.params.amount }
                      </Typography>
                      <Typography variant='body2' align='right'>
                        { moment(payment.time).format('LLL').toString() }
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Paper>
        </div>
      );
    }
  }
);
export default PaymentHistoryPresenter;
