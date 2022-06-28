import * as React from 'react';
import styles from './newfeeds.styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Grid, Avatar, Button, Modal } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiCommentOutline, mdiHeartOutline, mdiThumbUpOutline, mdiEmoticonExcitedOutline, mdiStarFace, mdiEmoticonSadOutline, mdiEmoticonAngryOutline } from '@mdi/js';
import * as moment from 'moment';
import { isEmpty } from 'ramda';
import Comment from './comment';
interface Props extends WithStyles<typeof styles> {
  newfeeds: any[]
  selectedPost: any
  handleReact: (feed: any, reactContent: any) => void
  handleFeedComment: (feed: any, commentContent: any) => void
  handleViewComment: (feed: any) => void
}
interface State {
  commentOpen: boolean
}
const NewfeedsPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: Readonly<State> = {
      commentOpen: false
    }
    handleReactionClick = (post: any, reactContent: any) => (_: React.MouseEvent<HTMLElement>) => {
      const { handleReact } = this.props;
      handleReact(post, reactContent);
    }
    handleCommentClick = (post: any) => (_: React.MouseEvent<HTMLElement>) => {
      const { handleViewComment } = this.props;
      handleViewComment(post);
      this.setState({ commentOpen: true });
    } 
    onModalClose = () => {
      this.setState({ commentOpen: false });
    }
    handleCommentSubmit = (feed: any, commentContent: any) => {
      console.log(feed, commentContent);
      const { handleFeedComment } = this.props;
      handleFeedComment(feed, commentContent);
    }
    render() {
      const { classes, newfeeds, selectedPost } = this.props;
      return (
        <Paper elevation={0} square={true} className={classes.root}>
          <Typography
            variant='body2'
            className={classes.lrMargin}
            color='secondary'
          >
            Newfeeds
          </Typography>
          <Divider variant='fullWidth' />
          {}
          <div className={classes.hiddenScroll}>
            {newfeeds.map((feed, index) => (
              <Grid
                key={index}
                container={true}
                className={classes.postContainer}
                justify='flex-start'
                spacing={16}
              >
                <Grid container={true}>
                  <Grid item={true} xs={2} xl={1}>
                    <Avatar
                      className={classes.avatar}
                      src={feed.image 
                        ? `data:image/jpeg;base64,${Buffer.from(feed.image).toString('base64')}`
                        : `https:
                      }
                    />
                  </Grid>
                  <Grid item={true} xs={10} xl={11}>
                    <Grid container={true} justify='flex-start'>
                      <Grid item={true} xs={12}>
                        <Typography
                          variant='body2'
                          className={classes.posterName}
                          component='span'
                        >
                          {feed.displayName}
                        </Typography>
                        <Typography
                          variant='overline'
                          className={classes.posterSubText}
                          component='span'
                        >
                          &nbsp; &#183;{' '}
                          {moment(feed.time)
                            .format('LLL')
                            .toString()}
                        </Typography>
                      </Grid>
                      <Grid item={true} xs={12}>
                        <Typography
                          variant='body2'
                          className={classes.postContent}
                        >
                          {feed.content.text}
                        </Typography>
                      </Grid>
                      <Grid
                        item={true}
                        xs={12}
                        className={classes.reactionGroup}
                      >
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
                            onClick={this.handleCommentClick(feed)}
                          >
                            <Icon path={mdiCommentOutline} size='1.25em' />{' '}
                            &nbsp;{' '}
                            {feed.reacts.filter(p => p.type === 1).length}
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 2
                            })}
                          >
                            <Icon path={mdiHeartOutline} size='1.25em' /> &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 2
                              ).length
                            }
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 1
                            })}
                          >
                            <Icon path={mdiThumbUpOutline} size='1.25em' />{' '}
                            &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 1
                              ).length
                            }
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 3
                            })}
                          >
                            <Icon
                              path={mdiEmoticonExcitedOutline}
                              size='1.25em'
                            />{' '}
                            &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 3
                              ).length
                            }
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 4
                            })}
                          >
                            <Icon path={mdiStarFace} size='1.25em' /> &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 4
                              ).length
                            }
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 5
                            })}
                          >
                            <Icon path={mdiEmoticonSadOutline} size='1.25em' />{' '}
                            &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 5
                              ).length
                            }
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
                            onClick={this.handleReactionClick(feed, {
                              type: 2,
                              reaction: 6
                            })}
                          >
                            <Icon
                              path={mdiEmoticonAngryOutline}
                              size='1.25em'
                            />{' '}
                            &nbsp;
                            {
                              feed.reacts.filter(
                                p => p.type === 2 && p.reaction === 6
                              ).length
                            }
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item={true} xs={12}>
                    <Divider variant='middle' />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </div>
          <Modal open={this.state.commentOpen} onClose={this.onModalClose}>
            <Comment
              post={selectedPost}
              handleCommentSubmit={this.handleCommentSubmit}
            />
          </Modal>
        </Paper>
      );
    }
  }
);
export default NewfeedsPresenter;
