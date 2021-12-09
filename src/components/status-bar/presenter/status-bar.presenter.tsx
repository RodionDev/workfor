import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './status-bar.styles';
interface Props extends WithStyles<typeof styles> {}
const StatusBarPresenter: React.SFC<Props> = ({classes}) => 
  <div className={classes.root}>
    Status Bar
  </div>
export default withStyles(styles)(StatusBarPresenter);
