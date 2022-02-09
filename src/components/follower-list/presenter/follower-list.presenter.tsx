import * as React from 'react';
import styles from './follower-list.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
  Grid} from '@material-ui/core';
import { Follower } from '../..';
interface Props extends WithStyles<typeof styles> {}
const FollowerListPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes } = this.props;
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
          <Grid
            container={true}
            className={classes.followerContainer}
            justify='flex-start'
            spacing={16}
          >
            <Grid item={true} xl={6} xs={12}>
              <Follower/>
            </Grid>
            <Grid item={true} xl={6} xs={12}>
              <Follower/>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
);
export default FollowerListPresenter;
