import * as React from 'react';
import styles from './info-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { DateRangeOutlined, HighlightOutlined, CreditCardOutlined } from '@material-ui/icons';
import { UserState } from '../../../store/user';
import * as moment from 'moment';
interface Props extends WithStyles<typeof styles>, UserState {}
const InfoPanelPresenter: React.SFC<Props> = ({classes, balance, createdAt, energy, displayName, loading, publicKey }): JSX.Element =>
  <div className={classes.root}>
    <Typography
      variant='body2'
      className={classes.infoHeadline}
    >
      {displayName || 'YOUR DISPLAYNAME'}
    </Typography>
    <Typography
      variant='body2'
      className={classes.publicKey || 'YOUR FULL PUBLICKEY'}
    >
      {publicKey}
    </Typography>
    <Typography
      variant='body2'
      className={classes.subText}
    >
      <HighlightOutlined className={classes.subIcon}/> { (energy || 0) + ' OXY' }
    </Typography>
    <Typography
      variant='body2'
      className={classes.subText}
    >
      <CreditCardOutlined className={classes.subIcon}/> { ((balance || 0)/100000000) + ' TRE'}
    </Typography>
      <Typography
      variant='body2'
      className={classes.subText}
    >
      <DateRangeOutlined className={classes.subIcon}/> {moment(createdAt).toString()}
    </Typography>
  </div>
export default withStyles(styles)(InfoPanelPresenter);
