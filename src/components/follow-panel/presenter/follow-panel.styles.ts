import { createStyles, Theme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = (theme: Theme) => createStyles({
  root: {
    paddingLeft: 12
  },
  panelName: {
    fontSize: 24,
    padding: '8px 0 8px 0',
    margin: '0 18px 0 18px'
  },
  submitBtn: {
    margin: '10px 0 0 16px'
  },
  list: {
  },
  input: {
    margin: '8px 12px 6px 12px',
    paddingBottom: 12
  },
  displayName: {
    lineHeight: '32px',
    padding: '0 8px',
    marginRight: 8,
    border: '0px transparent',
    borderRadius: '16px',
    backgroundColor: fade('#aaa', 0.25),
    transition: 'background-color 750ms',
    '&:hover': {
      backgroundColor: fade(pink.A400, 0.15),
    },
  }
});
export default styles;
