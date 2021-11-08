import { createStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { red } from '@material-ui/core/colors';
const styles = (theme: Theme) => createStyles({
  appBar: {
    backgroundColor: '#fff'
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
    fontSize: 26
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
    [theme.breakpoints.up('md')]: {
      width: 200,
      '&:focus': {
        width: 280,
        border: '2px solid',
        borderColor: red[900],
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
    textTransform: 'none'
  }
});
export default styles;
