import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './status-bar.styles';
import { Tabs, Tab, Paper, Grid, Avatar, Button, Modal } from '@material-ui/core';
import CreateAccount from './createAccountModal';
import Payment from './PaymentModal';
interface Props extends WithStyles<typeof styles> {
  handleTabChange: (tabId: number) => void
  handleUpload: (buffer: Uint8Array) => void
  handleAccountSubmit: (account: string) => void
  postCount: number
  feedCount: number
  image: any
  followingCount: number,
  followerCount: number
}
interface State {
  value: number
  createOpen: boolean
  paymentOpen: boolean
}
const StatusBarPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    static defaultProps = {
      postCount: 0,
      handleUpload: (buffer: Uint8Array) => console.log('handle upload'),
      feedCount: 0,
      followingCount: 0,
      followerCount: 0,
      image: null
    }
    state: Readonly<State> = {
      value: 0,
      createOpen: false,
      paymentOpen: false
    };
    handleChange = (_: any, value: any) => {
      const { handleTabChange } = this.props;
      this.setState({ value });
      handleTabChange(value);
    };
    handleFileInput = (event: any) => {
      const { handleUpload } = this.props;
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const { result } = reader;
        if (result) {
          const buffer = Buffer.from(result as ArrayBuffer);
          handleUpload(buffer);
        }
      }
      reader.readAsArrayBuffer(file);
    }
    onCreateClose = () => {
      this.setState({ createOpen: false });
    }
    createClick = (_: React.MouseEvent<HTMLElement>) => {
      this.setState({ createOpen: true });
    }
    onPaymentClose = () => {
      this.setState({ paymentOpen: false });
    }
    paymentClick = (_: React.MouseEvent<HTMLElement>) => {
      this.setState({ paymentOpen: true });
    }
    handleCreateAccountSubmit = (account: string) => {
      const { handleAccountSubmit } = this.props;
      handleAccountSubmit(account);
      this.onCreateClose();
    }
    render(): JSX.Element {
      const { classes, image, followerCount, postCount, followingCount, feedCount } = this.props;
      return (
        <Paper color='default' className={classes.root} elevation={2}>
          <Grid container={true} spacing={0} className={classes.fixedHeight}>
            <Grid item={true} md={3}>
              <Grid
                container={true}
                justify='flex-end'
                className={classes.fixedHeight}
              >
                <input
                  accept='image/jpeg'
                  id='image-input'
                  type='file'
                  hidden={true}
                  onChange={this.handleFileInput}
                />
                <label htmlFor='image-input'>
                  <Avatar
                    className={classes.avatar}
                    src={image ? `data:image/jpeg;base64,${Buffer.from(image).toString('base64')}` : 'https:
                  />
                </label>
              </Grid>
            </Grid>
            <Grid item={true} md={6}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor='secondary'
                textColor='secondary'
                centered={true}
              >
                <Tab
                  label={postCount}
                  icon={<span className={classes.tabTitle}>Bài viết</span>}
                  className={classes.tab}
                />
                <Tab
                  label={feedCount || 0}
                  icon={<span className={classes.tabTitle}>Newfeeds</span>}
                  className={classes.tab}
                />
                <Tab
                  label={followerCount ? followerCount : 0}
                  icon={<span className={classes.tabTitle}>Follower</span>}
                  className={classes.tab}
                />
                <Tab
                  label={followingCount ? followingCount : 0}
                  icon={<span className={classes.tabTitle}>Following</span>}
                  className={classes.tab}
                />
              </Tabs>
            </Grid>
            <Grid item={true} md={3}>
              <Grid container={true} justify='flex-start'>
                <div className={classes.verticalAlign}>
                  <Button 
                    variant='outlined' 
                    color='secondary'
                    classes={{
                      root: classes.actionButton
                    }}
                    onClick={this.paymentClick}
                    >
                    Chuyển tiền
                  </Button>
                  <Button 
                    variant='outlined' 
                    color='secondary'
                    classes={{
                      root: classes.actionButton
                    }}
                    onClick={this.createClick}
                    >
                    Tạo tài khoản
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Modal open={this.state.createOpen} onClose={this.onCreateClose}>
            <CreateAccount onSubmit={this.handleCreateAccountSubmit}/>
          </Modal>
          <Modal open={this.state.paymentOpen} onClose={this.onPaymentClose}>
            <Payment/>
          </Modal>
        </Paper>
      );
    }
  }
);
export default withStyles(styles)(StatusBarPresenter);
