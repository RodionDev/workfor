import { createStyles, Theme } from '@material-ui/core/styles';
const styles  = (theme: Theme) => createStyles({
  root: {
    flex: 1,
    flexGrow: 1,
    minHeight: 48,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    textTransform: 'none',
    fontSize: 17,
    fontWeight: 800,
    borderBottom: '1px solid transparent',
    '&:hover': {
      borderBottomColor: theme.palette.secondary.light
    }
  },
  tabTitle: {
    fontSize: 12,
    fontWeight: 500
  },
  avatar: {
    width: 200,
    height: 200,
    top: '-110px',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  fixedHeight: {
    maxHeight: 72
  },
  verticalAlign: {
    lineHeight: '72px'
  },
  actionButton: {
    borderRadius: '18px',
    textTransform: 'none',
    fontSize: 17
  }
});
export default styles;
