import * as React from 'react';
import styles from './primary-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
interface Props extends WithStyles<typeof styles> {}
const PrimaryPanelPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render(): JSX.Element {
      return (
        <div>
          Primary Panel Presenter
        </div>
      )
    }
  }
)
export default PrimaryPanelPresenter;
