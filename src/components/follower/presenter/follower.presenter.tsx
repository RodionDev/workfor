import * as React from 'react';
import styles from './follower.styles';
import {
  WithStyles,
  withStyles,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
interface Props extends WithStyles<typeof styles> {}
const FollowerPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes } = this.props;
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom={true}
            >
              Since 6/2008
            </Typography>
            <Typography variant='h5' component='h2'>
              Name
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              @name
            </Typography>
            <Typography component='p'>
              {"Place holder for cover image"}
            </Typography>
          </CardContent>
          {}
        </Card>
      );
    }
  }
);
export default FollowerPresenter;
