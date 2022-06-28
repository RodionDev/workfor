import * as React from 'react';
import {
  WithStyles,
  withStyles,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  TextField
} from '@material-ui/core';
import styles from './post.styles';
import { isEmpty, take } from 'ramda';
import * as moment from 'moment';
interface Props extends WithStyles<typeof styles> {
  post: any;
  handleCommentSubmit: (post: any, commentContent: string) => void;
}
interface State {
  commentContent: string;
}
const Comment = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: Readonly<State> = {
      commentContent: ''
    };
    handleSubmit = (_: React.MouseEvent<HTMLElement>) => {
      const { handleCommentSubmit, post } = this.props;
      this.setState({ commentContent: '' });
      handleCommentSubmit(post, this.state.commentContent);
    };
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ commentContent: event.target.value });
    };
    render() {
      const { classes, post } = this.props;
      return (
        post && (
          <>
            <Paper className={classes.modal}>
              <Grid container={true}>
                <Grid item={true} xs={8}>
                  <Typography
                    variant='body2'
                    className={classes.lrMargin}
                    color='secondary'
                  >
                    Bình luận
                  </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                  {!isEmpty(this.state.commentContent) && (
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.submitBtn}
                      onClick={this.handleSubmit}
                    >
                      Gửi
                    </Button>
                  )}
                </Grid>
              </Grid>
              <Divider variant='fullWidth' />
              <div className={classes.commentInput}>
                <TextField
                  variant='outlined'
                  label='Bình luận'
                  fullWidth={true}
                  multiline={true}
                  rows={1}
                  rowsMax={1}
                  value={this.state.commentContent}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className={classes.commentHiddenScroll}>
                {post &&
                  post.reacts
                    .filter(react => react.type === 1)
                    .map((react, index) => (
                      <Grid key={index} container={true}>
                        <Grid item={true} xs={1} />
                        <Grid item={true} xs={11}>
                          <Typography
                            variant='body2'
                            className={classes.posterName}
                            component='span'
                            noWrap={true}
                          >
                            {react.displayName && react.displayName.length > 25 ? take(25, react.displayName) + '...' : react.displayName  || take(12, react.account) + '...'}
                          </Typography>
                          <Typography
                            variant='overline'
                            className={classes.posterSubText}
                            component='span'
                          >
                            &nbsp; &#183;{' '}
                            {moment(react.time)
                              .format('LLL')
                              .toString()}
                          </Typography>
                          <Divider variant='fullWidth' />
                        </Grid>
                        <Grid container={true}>
                          <Grid item={true} xs={2} />
                          <Grid item={true} xs={10}>
                            <Typography
                              variant='body2'
                              className={classes.postContent}
                            >
                              {react.text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
              </div>
            </Paper>
          </>
        )
      );
    }
  }
);
export default Comment;
