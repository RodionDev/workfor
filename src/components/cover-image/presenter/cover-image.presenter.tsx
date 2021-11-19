import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './cover-image.styles';
interface Props extends WithStyles<typeof styles> {
  imageUrl?: string
}
const CoverImagePresenter: React.SFC<Props> = ({imageUrl, classes}) =>
  <>
    <img className={classes.image} src={imageUrl}/>
  </>
CoverImagePresenter.defaultProps = {
  imageUrl: 'https:
}
export default withStyles(styles)(CoverImagePresenter);
