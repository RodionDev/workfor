import * as React from 'react';
import styles from './follower-list.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Grid } from '@material-ui/core';
import { Follower } from '../..';
interface Props extends WithStyles<typeof styles> {
  followers: any[];
}
const FollowerListPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes, followers } = this.props;
      return (
        <Paper elevation={0} square={true}>
          <Typography
            variant='body2'
            className={classes.lrMargin}
            color='secondary'
          >
            Follower
          </Typography>
          <Divider variant='fullWidth' />
          <div className={classes.hiddenScroll}>
            <Grid
              container={true}
              className={classes.followerContainer}
              justify='flex-start'
              spacing={16}
            >
              {followers.map((follower, index) => (
                <Grid key={index} item={true} xl={12} xs={12}>
                  <Follower data={follower} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Paper>
      );
    }
  }
);
export default FollowerListPresenter;
