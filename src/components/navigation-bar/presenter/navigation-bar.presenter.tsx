import * as React from 'react';
import { AppBar, Toolbar, Typography, Icon, InputBase, Button, Menu, MenuItem, TextField, Divider } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './navigationbar.styles';
export interface NavigationBarProps extends WithStyles<typeof styles> {
  brandName: string;
  searchBarPlaceHolder: string;
  redirectLinks?: Array<{ name: string; link: string }>;
}
interface State {
  anchorEl?: HTMLElement | null;
  privateKey?: string
}
const NavigationBarPresenter = withStyles(styles)(
  class extends React.Component<NavigationBarProps, State> {
    state: Readonly<State> = {
      anchorEl: null,
      privateKey: ''
    };
    handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
      this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = (): void => {
      this.setState({ anchorEl: null });
    };
    handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ privateKey: event.target.value });
    }
    render(): JSX.Element {
      const { brandName, classes } = this.props;
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      return (
        <div>
          <AppBar
            position='static'
            classes={{
              root: classes.appBar
            }}
          >
            <Toolbar className={classes.toolBar}>
              <Typography
                align='center'
                variant='title'
                classes={{
                  root: classes.title
                }}
              >
                {brandName}
              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Icon>searchIcon</Icon>
                </div>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <div>
                <Button 
                  variant={open ? 'outlined': 'text'} 
                  color='secondary' 
                  className={classes.button}
                  aria-owns={open ? 'menu-appbar' : undefined}
                  onClick={this.handleMenu}
                >
                  <Typography variant='title'
                    className={classes.buttonSecondText}
                  >
                    Đã có tài khoản?
                  </Typography> 
                  &nbsp; 
                  <Typography 
                    variant='title'
                    className={classes.buttonPrimaryText}
                  >
                    Đăng nhập
                  </Typography> 
                </Button>
                <Menu
                  id='menu-appbar'
                  classes={{
                    paper: classes.popupMenu
                  }}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  getContentAnchorEl={null}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem className={classes.key}>
                  <TextField
                    id='standard-textarea'
                    label='Private Key'
                    color='secondary'
                    className={classes.textField}
                    margin='normal'
                    onChange={this.handleKeyChange}
                  />
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Button
                      variant='contained'
                      fullWidth={true}
                      color='secondary'
                      className={classes.noCap}
                    >
                      Đăng nhập
                    </Button>
                  </MenuItem>
                  <Divider variant='fullWidth' className={classes.divider}/>
                  <Typography
                    variant='body2'
                    className={classes.newCommer}
                  >
                    Mới gia nhập?
                  </Typography>
                  <MenuItem onClick={this.handleClose}>
                    <Button
                      variant='contained'
                      fullWidth={true}
                      color='primary'
                      className={classes.noCap}
                    >
                      Đăng ký
                    </Button>
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
);
export default NavigationBarPresenter;
