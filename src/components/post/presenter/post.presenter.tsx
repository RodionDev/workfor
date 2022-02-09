import * as React from 'react';
import styles from './post.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Grid, Avatar, Button } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiCommentOutline, mdiHeartOutline, mdiShareOutline } from '@mdi/js';
interface Props extends WithStyles<typeof styles> {}
const PostPresenter = withStyles(styles)(
  class extends React.Component<Props> {
    render(): JSX.Element {
      const { classes } = this.props;
      return(
        <Paper elevation={0} square={true} className={classes.root}>
          <Typography
            variant='body2'
            className={classes.lrMargin}
            color='secondary'
          >
            Bài viết
          </Typography>
          <Divider variant='fullWidth' />
          {}
          <Grid
            container={true}
            className={classes.postContainer}
            justify='flex-start'
            spacing={16}
          >
            <Grid item={true} xs={2} xl={1}>
              <Avatar src='https:
            </Grid>
            <Grid item={true} xs={10} xl={11}>
              <Grid container={true} justify='flex-start'>
                <Grid item={true} xs={12}>
                  <Typography
                    variant='body2'
                    className={classes.posterName}
                    component='span'
                  >
                    YouTube
                  </Typography>
                  <Typography
                    variant='overline'
                    className={classes.posterSubText}
                    component='span'
                  >
                    &nbsp; &#183; 9g
                  </Typography>
                </Grid>
                <Grid item={true} xs={12}>
                  <Typography variant='body2' className={classes.postContent}>
                    Coming to Android & iOS over the next few weeks... Autoplay
                    on Home!
                    <br />
                    Preview a video while you scroll or watch the whole thing on
                    mute w/ captions.
                    <br />
                    To turn on/off or customize to play only on WiFi, go to
                    Settings > Autoplay > Autoplay on Home.
                  </Typography>
                </Grid>
                <Grid item={true} xs={12}>
                  <Grid container={true} justify='flex-start'>
                    <Button
                      disableRipple={true}
                      className={classes.comment}
                      variant='text'
                      color='default'
                      size='small'
                      classes={{
                        text: classes.commentHover
                      }}
                    >
                      <Icon path={mdiCommentOutline} size='1.25em'/> &nbsp; 672
                    </Button>
                      <Button
                      disableRipple={true}
                      className={classes.like}
                      variant='text'
                      color='default'
                      size='small'
                      classes={{
                        text: classes.likeHover
                      }}
                    >
                      <Icon path={mdiHeartOutline} size='1.25em'/> &nbsp; 672
                    </Button>
                      <Button
                      disableRipple={true}
                      className={classes.share}
                      variant='text'
                      color='default'
                      size='small'
                      classes={{
                        text: classes.shareHover
                      }}
                    >
                      <Icon path={mdiShareOutline} size='1.25em'/> &nbsp; 672
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
)
export default PostPresenter;
