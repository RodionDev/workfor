import * as React from 'react';
import styles from './following-list.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
  Grid} from '@material-ui/core';
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
          <Typography
            variant='body2'
            className={classes.lrMargin}
            color='secondary'
          >
            Following
          </Typography>
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
