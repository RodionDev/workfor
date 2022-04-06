import * as React from 'react';
import styles from './post-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, TextField, Button, Grid } from '@material-ui/core';
import { isEmpty, equals } from 'ramda';
interface Props extends WithStyles<typeof styles> {
  onContentSubmit: (content: string) => void
}
interface State {
  content: string
}
const PostPanelPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: Readonly<State> = {
      content: ''
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ content: event.target.value })
    }
    handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
      const { onContentSubmit } = this.props;
      const { content } = this.state;
      onContentSubmit(content);
      this.setState({content: ''});
    }
    render() {
      const { classes } = this.props;
      const { content } = this.state;
      return (
        <div className={classes.root}>
          <Paper elevation={0} square={true} className={classes.paper}>
            <Grid container={true}>
              <Grid item={true} xs={8}>
                <Typography 
                  variant='body2' 
                  color='secondary' 
                  className={classes.logan}
                  >
                  Đăng bài
                </Typography>
              </Grid>
              <Grid item={true} xs={4}>
                {
                  !isEmpty(content) && 
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.submitBtn}
                    onClick={this.handleSubmit}
                    >
                    Gửi
                  </Button>
                }
              </Grid>
            </Grid>
            <Divider variant='fullWidth' />
            <div className={classes.input}>
              <TextField
                label='Nội dung'
                multiline={true}
                rowsMax={10}
                rows={6}
                variant='outlined'
                value={content}
                onChange={this.handleInputChange}
                fullWidth={true}
                helperText={'~' + (117 + (!equals(content, '') ? Buffer.from(content).byteLength  : 0)) + ' Oxy'}
              />
            </div>
          </Paper>
        </div>
      )
    }
  }
)
export default PostPanelPresenter;
