import * as React from 'react';
import styles from './primary-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Post, FollowerList, FollowingList } from '../..';
import { PrimaryPanelState } from 'src/store/primary-panel';
interface Props extends WithStyles<typeof styles>, PrimaryPanelState {
  followings:  string[]
}
const PrimaryPanelPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    static defaultProps = {
      followings: []
    }
    render(): JSX.Element {
      const { tabId } = this.props;
      return (
        <div>
          {tabId === 0 && <Post />}
          {tabId === 2 && <FollowerList />}
          {tabId === 3 && <FollowingList />}
        </div>
      );
    }
  }
);
export default PrimaryPanelPresenter;
