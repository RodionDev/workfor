import * as React from 'react';
import styles from './primary-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Post, FollowerList } from '../..';
import { PrimaryPanelState } from 'src/store/primary-panel';
interface Props extends WithStyles<typeof styles>, PrimaryPanelState {}
const PrimaryPanelPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render(): JSX.Element {
      const { tabId } = this.props;
      return (
        <div>
          {tabId === 0 && <Post />}
          {tabId === 2 && <FollowerList />}
        </div>
      );
    }
  }
);
export default PrimaryPanelPresenter;
