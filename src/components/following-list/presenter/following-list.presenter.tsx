import * as React from 'react';
import styles from './following-list.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Grid, Button } from '@material-ui/core';
import { Follower, Following } from '../..';
import { isEmpty } from 'ramda';
interface Props extends WithStyles<typeof styles> {
  followings: any[];
  unfollows: string[];
  handleUnfollowConfirm: () => void;
}
const FollowingListPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    static defaultProps = {
      followings: [],
      unfollows: [],
      handleUnfollowConfirm: () => {
        console.log('handleUnfollowConfirm');
      }
    };
    handleConfirmBtnClick = (event: React.MouseEvent<HTMLElement>) => {
      const { handleUnfollowConfirm } = this.props;
      handleUnfollowConfirm();
    };
    render() {
      const { classes, followings, unfollows } = this.props;
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
              {!isEmpty(unfollows) && (
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.confirmBtn}
                  onClick={this.handleConfirmBtnClick}
                >
                  Xác nhận
                </Button>
              )}
            </Grid>
          </Grid>
          <Divider variant='fullWidth' />
          <div className={classes.hiddenScroll}>
            <Grid
              container={true}
              className={classes.followerContainer}
              justify='flex-start'
              spacing={16}
            >
              {followings.map((following, index) => (
                <Grid key={index} item={true} xl={12} xs={12}>
                  <Following data={following} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Paper>
      );
    }
  }
);
export default FollowingListPresenter;
