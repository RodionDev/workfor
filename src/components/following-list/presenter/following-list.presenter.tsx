import * as React from 'react';
import styles from './following-list.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Button} from '@material-ui/core';
import { Follower, Following } from '../..';
interface Props extends WithStyles<typeof styles> {
  followings: any[]
}
const FollowingListPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes, followings } = this.props;
      return (
        <Paper elevation={0} square={true}>
          <Grid container={true}>
            <Grid item={true} xs={8}>
              <Typography
                variant='body2'
                className={classes.lrMargin}
                color='secondary'
              >
                Following
              </Typography>
            </Grid>
            <Grid item={true} xs={4}>
              <Button
                variant='contained'
                color="primary"
                className={classes.confirmBtn}
              >
                Xác nhận
              </Button>
            </Grid>
          </Grid>
          {}
          <Divider variant='fullWidth' />
          <Grid
            container={true}
            className={classes.followerContainer}
            justify='flex-start'
            spacing={16}
          >
          {
            followings.map(
              (following, index) => 
              <Grid key={index} item={true} xl={12} xs={12}>
                <Following data={following}/>
            </Grid>
            )
          }
          </Grid>
        </Paper>
      );
    }
  }
);
export default FollowingListPresenter;
