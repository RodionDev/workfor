import { createStyles, Theme } from '@material-ui/core/styles';
const styles = (theme: Theme) => createStyles({
  root: {
    paddingLeft: 12,
  },
  paper: {
  },
  panelName: {
    fontSize: 24,
    padding: '8px 0 8px 0',
    margin: '0 18px 0 18px'
  },
  input: {
    margin: '8px 12px 6px 12px',
    paddingBottom: '12px'
  },
  submitBtn: {
    margin: '10px 0px 0px 16px'
  }
});
export default styles;
