import * as React from 'react';
import styles from './info-panel.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { DateRangeOutlined, HighlightOutlined, CreditCardOutlined, SaveAltOutlined } from '@material-ui/icons';
import { UserState, UserAction } from '../../../store/user';
import * as moment from 'moment';
interface Props extends WithStyles<typeof styles>, UserState {
  handleSave: (username: string) => void
}
interface State {
  editMode: boolean,
  newName: string
}
const InfoPanelPresenter = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: Readonly<State> = {
      editMode: false,
      newName: ''
    }
    handleEditClick = (event: React.MouseEvent<HTMLElement>) => {
      const { displayName } = this.props;
      this.setState({newName: displayName ? displayName : ''});
      this.setState({editMode: true})
    }
    handleSaveClick = (event: React.MouseEvent<HTMLElement>) => {
      const { handleSave } = this.props;
      const { newName } = this.state;
      handleSave(newName);
      this.setState({editMode: false});
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({newName: event.target.value });
    }
    render() {
      const { classes, displayName, publicKey, energy, balance, createdAt, } = this.props;
      const { editMode, newName } = this.state;
      return (
        <div className={classes.root}>
        {
          editMode ? 
          <Grid container={true}>
            <Grid item={true} xs={10}>
              <TextField
                id='outlined-name'
                label='Tên mới'
                value={newName}
                margin='none'
                variant='outlined'
                fullWidth={true}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item={true} xs={2}>
              <Button
                variant='contained'
                color='secondary'
                className={classes.saveBtn}
                onClick={this.handleSaveClick}
              >
                <SaveAltOutlined/>
              </Button>
            </Grid>
          </Grid>
          :
          <Typography
            variant='body2'
            className={classes.infoHeadline}
            noWrap={true}
            align='center'
            onClick={this.handleEditClick}
          >
            {displayName || 'YOUR DISPLAYNAME'}
          </Typography>
        }
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
      )
    }
  }
)
export default InfoPanelPresenter;
