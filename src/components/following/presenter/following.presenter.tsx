import * as React from 'react';
import styles from './following.styles';
import {
  WithStyles,
  withStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Button
} from '@material-ui/core';
import * as moment from 'moment';
import { CreditCardOutlined, DateRangeOutlined } from '@material-ui/icons';
import { includes } from 'ramda';
interface Props extends WithStyles<typeof styles> {
  data: any,
  handleUnfollowClick: (userPublicKey: string) => void
  unfollows: string[]
}
const FollowingPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    static defaultProps = {
      unfollows: []
    }
    handleCancelButtonClick = (event: React.MouseEvent<HTMLElement>) => {
      const { data, handleUnfollowClick } = this.props;
      const { publicKey } = data;
      handleUnfollowClick(publicKey)
    }
    render() {
      const { classes, data, unfollows } = this.props;
      const { balance, createdAt, displayName, image, publicKey } = data;
      return (
        <Card className={classes.card}>
          <CardContent>
            <Grid container={true}>
              <Grid item={true} xs={4}>
                <Avatar
                  className={classes.avatar}
                  src={image ? `data:image/jpeg;base64,${Buffer.from(image).toString('base64')}` : `https:
                />
              </Grid>
              <Grid item={true} xs={6}>
                <Typography variant='h5' component='h2'>
                  {displayName}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  {publicKey}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  <DateRangeOutlined className={classes.subIcon} fontSize='small'/> {moment(createdAt).format('LLL').toString()}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  <CreditCardOutlined className={classes.subIcon} fontSize='small'/> {balance/100000000 + ' TRE'}
                </Typography>
              </Grid>
              <Grid item={true} xs={2}>
                <Button
                  variant='contained'
                  className={classes.cancelBtn}
                  size='small'
                  color={includes(publicKey, unfollows) ? 'default' : 'secondary'}
                  onClick={this.handleCancelButtonClick}
                >
                  {
                    includes(publicKey, unfollows) ? 'Huỷ' : 'Xoá'
                  }
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    }
  }
);
export default FollowingPresenter;
