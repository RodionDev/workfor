import * as React from 'react';
import styles from './info-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { LocationOnOutlined, DateRangeOutlined } from '@material-ui/icons';
interface Props extends WithStyles<typeof styles> {}
const InfoPanelPresenter: React.SFC<Props> = ({classes}): JSX.Element =>
  <div className={classes.root}>
    <Typography
      variant='body2'
      className={classes.infoHeadline}
    >
      YouTube
    </Typography>
    <Typography
      variant='body2'
      className={classes.subText}
    >
      <LocationOnOutlined className={classes.subIcon}/> San Bruno, CA
    </Typography>
      <Typography
      variant='body2'
      className={classes.subText}
    >
      <DateRangeOutlined className={classes.subIcon}/> Tham gia 11/2007
    </Typography>
  </div>
export default withStyles(styles)(InfoPanelPresenter);
