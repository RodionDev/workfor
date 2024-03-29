import * as React from 'react';
import styles from './primary-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Post, FollowerList, FollowingList, Newfeeds } from '../..';
interface Props extends WithStyles<typeof styles> {
  tabId: number
}
const PrimaryPanelPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render(): JSX.Element {
      const { tabId } = this.props;
      return (
        <div>
          {tabId === 0 && <Post />}
          {tabId === 1 && <Newfeeds/>}
          {tabId === 2 && <FollowerList />}
          {tabId === 3 && <FollowingList />}
        </div>
      );
    }
  }
);
export default PrimaryPanelPresenter;
