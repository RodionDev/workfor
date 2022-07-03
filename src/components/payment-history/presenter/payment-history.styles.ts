import { Theme, createStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { pink } from '@material-ui/core/colors';
const styles = (theme: Theme) => createStyles({
  root: {
  },
  panelName: {
    fontSize: 24,
    margin: '6px 0 2px 16px'
  },
  list: {
    padding: 16,
    width: '100%',
    height: 409,
    maxHeight: 409,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  payment: {
    border: '0px transparent',
    padding: '0 8px',
    marginTop: 6,
    backgroundColor: fade('#aaa', 0.25),
    transition: 'background-color 750ms',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: fade(pink.A400, 0.15),
    },
  },
  account: {
    fontSize: 18
  },
  amount: {
    paddingLeft: 8
  }
})
export default styles;
