import * as React from 'react';
import styles from './post.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Avatar,
  Button,
  Modal,
} from '@material-ui/core';
import Icon from '@mdi/react';
import {
  mdiCommentOutline,
  mdiHeartOutline,
  mdiThumbUpOutline,
  mdiEmoticonExcitedOutline,
  mdiStarFace,
  mdiEmoticonAngryOutline,
  mdiEmoticonSadOutline
} from '@mdi/js';
import * as moment from 'moment';
import Comment from './comment';
import { isEmpty } from 'ramda';
interface Props extends WithStyles<typeof styles> {
  posts: any[]
  image: any
  displayName: string
  handleReact: (post: any, reactContent: any) => void
  handleComment: (post: any, commentContent: any) => void
  handleViewComment: (post: any) => void
  selectedPost: any
}
interface State {
  commentOpen: boolean
}
const PostPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    static defaultProps = {
      posts: [],
      image: '',
      displayName: '',
      selectedPost: null,
    };
    state: Readonly<State> = {
      commentOpen: false,
    };
    handleReactionClick = (post: any, reactContent: any) => (_: React.MouseEvent<HTMLElement>) => {
      const { handleReact } = this.props;
      const publicKey = window.sessionStorage.getItem('publicKey');
      const reacts = post.reacts.filter(react => react.type === 2 && react.account === publicKey);
      if (!isEmpty(reacts)) {
        handleReact(post, reacts[0].reaction === reactContent.reaction ? {type: 2, reaction: 0} : reactContent)
      } else {
        handleReact(post, reactContent);
      }
    };
    handleCommentClick = (post: any) => (_: React.MouseEvent<HTMLElement>) => {
      const { handleViewComment } = this.props;
      handleViewComment(post);
      this.setState({ commentOpen: true });
    };
    onModalClose = () => {
      this.setState({ commentOpen: false });
    };
    handleCommentSubmit = (post: any, commentContent: any) => {
      const { handleComment } = this.props;
      handleComment(post, commentContent);
    }
    render(): JSX.Element {
      const { classes, posts, image, displayName, selectedPost } = this.props;
      return (
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
          <div className={classes.hiddenScroll}>
            {posts.map((post, index) => (
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
                      src={
                        image
                          ? `data:image/jpeg;base64,${Buffer.from(
                              image
                            ).toString('base64')}`
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
                          {displayName}
                        </Typography>
                        <Typography
                          variant='overline'
                          className={classes.posterSubText}
                          component='span'
                        >
                          &nbsp; &#183;{' '}
                          {moment(post.time)
                            .format('LLL')
                            .toString()}
                        </Typography>
                      </Grid>
                      <Grid item={true} xs={12}>
                        <Typography
                          variant='body2'
                          className={classes.postContent}
                        >
                          {post.content.text}
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
                            onClick={this.handleCommentClick(post)}
                          >
                            <Icon path={mdiCommentOutline} size='1.25em' />{' '}
                            &nbsp;{' '}
                            {post.reacts.filter(p => p.type === 1).length}
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
                            onClick={this.handleReactionClick(post, {
                              type: 2,
                              reaction: 2
                            })}
                          >
                            <Icon path={mdiHeartOutline} size='1.25em' /> &nbsp;
                            {
                              post.reacts.filter(
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
                            onClick={this.handleReactionClick(post, {
                              type: 2,
                              reaction: 1
                            })}
                          >
                            <Icon path={mdiThumbUpOutline} size='1.25em' />{' '}
                            &nbsp;
                            {
                              post.reacts.filter(
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
                            onClick={this.handleReactionClick(post, {
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
                              post.reacts.filter(
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
                            onClick={this.handleReactionClick(post, {
                              type: 2,
                              reaction: 4
                            })}
                          >
                            <Icon path={mdiStarFace} size='1.25em' /> &nbsp;
                            {
                              post.reacts.filter(
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
                            onClick={this.handleReactionClick(post, {
                              type: 2,
                              reaction: 5
                            })}
                          >
                            <Icon path={mdiEmoticonSadOutline} size='1.25em' />{' '}
                            &nbsp;
                            {
                              post.reacts.filter(
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
                            onClick={this.handleReactionClick(post, {
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
                              post.reacts.filter(
                                p => p.type === 2 && p.reaction === 6
                              ).length
                            }
                          </Button>
                        </Grid>
                      </Grid>
                      {}
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
            <Comment post={selectedPost} handleCommentSubmit={this.handleCommentSubmit}/>
          </Modal>
        </Paper>
      );
    }
  }
);
export default PostPresenter;
