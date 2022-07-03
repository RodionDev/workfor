import * as React from 'react';
import {
  WithStyles,
  withStyles,
  TextField,
  Divider,
  Button,
  Typography,
  Grid,
  Paper
} from '@material-ui/core';
import styles from './status-bar.styles';
import { isEmpty } from 'ramda';
interface Props extends WithStyles<typeof styles> {}
interface State {
  publicKey: string;
}
const Payment = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: Readonly<State> = {
      publicKey: ''
    };
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ publicKey: event.target.value });
    }
    render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.paymentModal}>
          <Grid container={true}>
            <Grid item={true} xs={8}>
              <Typography
                variant='body2'
                className={classes.lrMargin}
                color='secondary'
              >
                Chuyển tiền
              </Typography>
            </Grid>
            <Grid item={true} xs={4}>
              {!isEmpty(this.state.publicKey) && (
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.submitBtn}
                >
                  Tạo
                </Button>
              )}
            </Grid>
          </Grid>
          <Divider variant='fullWidth' />
          <div className={classes.commentInput}>
            <TextField
              variant='outlined'
              label='Khoá công khai'
              fullWidth={true}
              multiline={true}
              rows={2}
              rowsMax={2}
              value={this.state.publicKey}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={classes.commentInput}>
            <TextField
              variant='outlined'
              label='Số tiền'
              fullWidth={true}
              multiline={true}
              rows={1}
              rowsMax={1}
              type='number'
              value={this.state.publicKey}
              onChange={this.handleInputChange}
            />
          </div>
        </Paper>
      );
    }
  }
);
export default Payment;
