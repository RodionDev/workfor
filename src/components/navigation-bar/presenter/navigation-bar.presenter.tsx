import * as React from 'react';
import { AppBar, Toolbar, Typography, Icon, InputBase, Button } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './navigationbar.styles';
export interface NavigationBarProps extends WithStyles<typeof styles> {
  brandName: string;
  searchBarPlaceHolder: string;
  redirectLinks?: Array<{ name: string; link: string }>;
}
interface State {
  anchorEl?: EventTarget | null;
}
const NavigationBarPresenter = withStyles(styles)(
  class extends React.Component<NavigationBarProps, State> {
    handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
      this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = (): void => {
      this.setState({ anchorEl: null });
    };
    render(): JSX.Element {
      const { brandName, classes } = this.props;
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
              <Button variant='text' className={classes.button}>
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
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
);
export default NavigationBarPresenter;
