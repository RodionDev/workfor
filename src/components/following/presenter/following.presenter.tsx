import * as React from 'react';
import styles from './following.styles';
import {
  WithStyles,
  withStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar
} from '@material-ui/core';
import * as moment from 'moment';
import { CreditCardOutlined, DateRangeOutlined } from '@material-ui/icons';
interface Props extends WithStyles<typeof styles> {
  data: any
}
const FollowingPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes, data } = this.props;
      const { balance, createdAt, displayName, image, publicKey } = data;
      return (
        <Card className={classes.card}>
          <CardContent>
            <Grid container={true}>
              <Grid item={true} xs={4}>
                <Avatar
                  className={classes.avatar}
                  src={image ? `data:image/jpeg;base64,${Buffer.from(image).toString('base64')}` : ''}
                />
              </Grid>
              <Grid item={true} xs={8}>
                <Typography variant='h5' component='h2'>
                  {displayName}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  {publicKey}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  <DateRangeOutlined className={classes.subIcon} fontSize='small'/> {moment(createdAt).toString()}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  <CreditCardOutlined className={classes.subIcon} fontSize='small'/> {balance/100000000 + ' TRE'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    }
  }
);
export default FollowingPresenter;
