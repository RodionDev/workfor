import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './status-bar.styles';
import { Tabs, Tab, Paper } from '@material-ui/core';
interface Props extends WithStyles<typeof styles> {
}
interface State {
  value: number
}
const StatusBarPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    state = {
      value: 0,
    };
    handleChange = (_: any, value: any) => {
      this.setState({ value })
    };
    render(): JSX.Element {
      const { classes } = this.props;
      return (
        <Paper color='default' className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor='secondary'
            textColor='secondary'
            centered={true}
          >
            <Tab label='778' icon={<span className={classes.tabTitle}>Bài viết</span>}className={classes.noCap}/>
            <Tab label='17.2N' icon={<span className={classes.tabTitle}>Thích</span>} className={classes.noCap}/>
            <Tab label='7.3N' icon={<span className={classes.tabTitle}>Follower</span>} className={classes.noCap}/>
            <Tab label='221' icon={<span className={classes.tabTitle}>Following</span>} className={classes.noCap}/>
          </Tabs>
        </Paper>
    );
    }
  }
)
export default withStyles(styles)(StatusBarPresenter);
