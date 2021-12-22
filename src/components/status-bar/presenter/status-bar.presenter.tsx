import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './status-bar.styles';
import { Tabs, Tab, Paper, Grid, Avatar, Button } from '@material-ui/core';
interface Props extends WithStyles<typeof styles> {}
interface State {
  value: number;
}
const StatusBarPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    state = {
      value: 0
    };
    handleChange = (_: any, value: any) => {
      this.setState({ value });
    };
    render(): JSX.Element {
      const { classes } = this.props;
      return (
        <Paper color='default' className={classes.root}>
          <Grid container={true} spacing={0} className={classes.fixedHeight}>
            <Grid item={true} md={2}>
              <Grid
                container={true}
                justify='flex-end'
                className={classes.fixedHeight}
              >
                <Avatar
                  className={classes.avatar}
                  src='https:
                />
              </Grid>
            </Grid>
            <Grid item={true} md={8}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor='secondary'
                textColor='secondary'
                centered={true}
              >
                <Tab
                  label='778'
                  icon={<span className={classes.tabTitle}>Bài viết</span>}
                  className={classes.tab}
                />
                <Tab
                  label='17.2N'
                  icon={<span className={classes.tabTitle}>Thích</span>}
                  className={classes.tab}
                />
                <Tab
                  label='7.3N'
                  icon={<span className={classes.tabTitle}>Follower</span>}
                  className={classes.tab}
                />
                <Tab
                  label='221'
                  icon={<span className={classes.tabTitle}>Following</span>}
                  className={classes.tab}
                />
              </Tabs>
            </Grid>
            <Grid item={true} md={2}>
              <Grid container={true} justify='flex-start'>
                <div className={classes.verticalAlign}>
                  <Button 
                    variant='outlined' 
                    color='secondary'
                    classes={{
                      root: classes.actionButton
                    }}
                    >
                    Theo dõi
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
);
export default withStyles(styles)(StatusBarPresenter);