import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './cover-image.styles';
interface Props extends WithStyles<typeof styles> {
  imageUrl?: string
}
const CoverImagePresenter: React.SFC<Props> = ({imageUrl, classes}) =>
  <div className={classes.root}>
    <img className={classes.image} src={imageUrl}/>
  </div>
CoverImagePresenter.defaultProps = {
  imageUrl: 'https:
}
export default withStyles(styles)(CoverImagePresenter);
