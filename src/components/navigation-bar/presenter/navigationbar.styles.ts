import { createStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { red } from '@material-ui/core/colors';
const styles = (theme: Theme) => createStyles({
  appBar: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0
  },
  toolBar: {
    width: '-webkit-fill-available',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
  },
  title: {
    color: '#66757f',
    fontSize: 32,
    cursor: 'pointer',
    borderBottom: 'solid 1px transparent',
    transition: 'border-color .5s ease-out',
    '&:hover': {
      color: red.A400,
      borderBottomColor: red.A400,
      borderWidth: 2
    }
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: 17,
    backgroundColor: fade('#aaa', 0.15),
    '&:hover': {
      backgroundColor: fade('#aaa', 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    color: '#66757f',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#66757f',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 280,
        border: '1px solid',
        borderColor: red.A200,
        borderRadius: 17
      },
    },
  },
  buttonSecondText: {
    fontSize: 12,
    color: '#CDD2D5',
    letterSpacing: 2
  },
  buttonPrimaryText: {
    fontSize: 12,
    color: '#66757F',
    letterSpacing: 2
  },
  button: {
    textTransform: 'none',
  },
  borderText: {
    border: '1px solid transparent'
  },
  popupMenu: {
    width: 233
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4,
    width: 200,
  },
  key: {
    height: 48
  },
  newCommer: {
    width: '85%',
    margin: '0 auto',
    marginTop: theme.spacing.unit,
    fontSize: 12,
    color: '#66757F'
  },
  noCap: {
    textTransform: 'none',
  },
  divider: {
    marginTop: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
    marginLeft: theme.spacing.unit * 5
  },
  linkText: {
    color: '#66757f',
    fontSize: 22,
    cursor: 'pointer',
    borderBottom: 'solid 1px transparent',
    transition: 'border-color .5s ease-out',
    '&:hover': {
      color: red.A400,
      borderBottomColor: red.A400,
      borderWidth: 2
    }
  },
  noHoverMenu: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
});
export default styles;
