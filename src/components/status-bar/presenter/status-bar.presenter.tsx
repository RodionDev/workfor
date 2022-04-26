import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './status-bar.styles';
import { Tabs, Tab, Paper, Grid, Avatar, Button } from '@material-ui/core';
import { UserState } from '../../../store/user';
interface Props extends WithStyles<typeof styles>, UserState {
  handleTabChange: (tabId: number) => void
  handleUpload: (buffer: Uint8Array) => void
  postCount: number
}
interface State {
  value: number;
}
const StatusBarPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    static defaultProps = {
      postCount: 0,
      handleUpload: (buffer: Uint8Array) => console.log('handle upload')
    }
    state = {
      value: 0
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
    render(): JSX.Element {
      const { classes, image, followerCount, postCount, followingCount } = this.props;
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
                  label='17.2N'
                  icon={<span className={classes.tabTitle}>Thích</span>}
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
                    >
                    Theo dõi
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
);
export default withStyles(styles)(StatusBarPresenter);
