import { createStyles, Theme } from '@material-ui/core/styles';
const styles  = (theme: Theme) => createStyles({
  root: {
    flex: 1,
    flexGrow: 1,
    minHeight: 48,
    backgroundColor: theme.palette.background.paper,
  },
  noCap: {
    textTransform: 'none',
    fontSize: 17,
    fontWeight: 800
  },
  tabTitle: {
    fontSize: 12,
    fontWeight: 500
  }
});
export default styles;
