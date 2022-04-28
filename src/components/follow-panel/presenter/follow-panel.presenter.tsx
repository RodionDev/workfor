import * as React from 'react';
import styles from './follow-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  Avatar
} from '@material-ui/core';
import {} from 'ramda';
interface Props extends WithStyles<typeof styles> {}
const FollowPanelPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    handleSubmit = (_: React.MouseEvent<HTMLElement>) => {
      console.log('Submit');
    };
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Paper elevation={0} square={true}>
            <Grid container={true}>
              <Grid item={true} xs={8}>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.panelName}
                >
                  Mọi người
                </Typography>
              </Grid>
              <Grid item={true} xs={4}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.submitBtn}
                  onClick={this.handleSubmit}
                >
                  Xong
                </Button>
              </Grid>
            </Grid>
            <Divider variant='fullWidth' />
            <div className={classes.input}>
              <Grid container={true} className={classes.list} spacing={16}>
                {}
                <Grid item={true} xs={12}>
                  <Grid container={true}>
                    <Grid item={true} xs={9}>
                      <Typography
                        variant='body2'
                        noWrap={true}
                        color='textPrimary'
                        className={classes.displayName}
                      >
                        Display name or public key
                      </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                      <Button variant='outlined' color='secondary' size='small'>
                        Follow
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                  <Grid container={true}>
                    <Grid item={true} xs={9}>
                      <Typography
                        variant='body2'
                        noWrap={true}
                        color='textPrimary'
                        className={classes.displayName}
                      >
                        Display name or public key
                      </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                      <Button variant='outlined' color='secondary' size='small'>
                        Follow
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      );
    }
  }
);
export default FollowPanelPresenter;
