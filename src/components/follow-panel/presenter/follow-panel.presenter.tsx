import * as React from 'react';
import styles from './follow-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  TextField
} from '@material-ui/core';
import { take, without, compose, filter, reject, isEmpty, includes } from 'ramda';
interface Props extends WithStyles<typeof styles> {
  handleFollow: (userPublicKey: string) => void;
  userCanFollow: any;
  publicKey: string;
  handleFollowConfirm: () => void;
}
interface State {
  selectedPublicKeys: string[];
  filterTemp: string;
}
const FollowPanelPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    static defaultProps = {
      userCanFollow: [],
      publicKey: ''
    };
    state: Readonly<State> = {
      selectedPublicKeys: [],
      filterTemp: ''
    };
    handleSubmit = (_: React.MouseEvent<HTMLElement>) => {
      const { handleFollowConfirm } = this.props;
      this.setState({
        selectedPublicKeys: [],
      });
      handleFollowConfirm();
    };
    handleBtnClick = (userPublicKey: string) => (
      _: React.MouseEvent<HTMLElement>
    ) => {
      const { handleFollow } = this.props;
      const { selectedPublicKeys } = this.state;
      this.setState({
        selectedPublicKeys: includes(userPublicKey, selectedPublicKeys)
          ? without([userPublicKey], selectedPublicKeys)
          : [...selectedPublicKeys, userPublicKey]
      });
      handleFollow(userPublicKey);
    };
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ filterTemp: event.target.value });
    };
    render() {
      const { classes, userCanFollow, publicKey } = this.props;
      const { selectedPublicKeys, filterTemp } = this.state;
      return (
        <div className={classes.root}>
          <Paper elevation={0} square={true} className={classes.paper}>
            <Grid container={true}>
              <Grid item={true} xs={8}>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.panelName}
                >
                  Mọi người
                </Typography>
              </Grid>
              <Grid item={true} xs={4}>
                {!isEmpty(selectedPublicKeys) && (
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.submitBtn}
                    onClick={this.handleSubmit}
                  >
                    Xong
                  </Button>
                )}
              </Grid>
            </Grid>
            <Divider variant='fullWidth' />
            <div className={classes.input}>
              <Grid container={true}>
                <Grid item={true} xs={12}>
                  <TextField
                    label='Tìm kiếm'
                    rowsMax={1}
                    variant='outlined'
                    value={filterTemp}
                    onChange={this.handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.input}>
              <Grid container={true} spacing={16}>
                {}
                {compose(
                  take<any>(6),
                  filter<any>(user => {
                    return (
                      user.publicKey
                        .toLowerCase()
                        .includes(filterTemp.toLowerCase()) ||
                      user.displayName
                        .toLowerCase()
                        .includes(filterTemp.toLowerCase())
                    );
                  }),
                  reject<any>(user => user.publicKey === publicKey)
                )(userCanFollow).map((user, index) => (
                  <Grid item={true} xs={12} key={index}>
                    <Grid container={true}>
                      <Grid item={true} xs={9}>
                        <Typography
                          variant='body2'
                          noWrap={true}
                          color='textPrimary'
                          align='center'
                          className={classes.displayName}
                        >
                          {user.displayName}
                        </Typography>
                      </Grid>
                      <Grid item={true} xs={3}>
                        {includes(user.publicKey, selectedPublicKeys) ? (
                          <Button
                            variant='outlined'
                            color='default'
                            size='small'
                            onClick={this.handleBtnClick(user.publicKey)}
                          >
                            Huỷ
                          </Button>
                        ) : (
                          <Button
                            variant='outlined'
                            color='secondary'
                            size='small'
                            onClick={this.handleBtnClick(user.publicKey)}
                          >
                            Follow
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Paper>
        </div>
      );
    }
  }
);
export default FollowPanelPresenter;
