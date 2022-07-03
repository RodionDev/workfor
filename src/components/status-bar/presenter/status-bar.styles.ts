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
    top: '-120px',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer'
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
    fontSize: 17,
    marginRight: 5
  },
  createModal: {
    width: 600,
    height: 150,
    boxShadow: theme.shadows[5],
    margin: '0 auto',
    marginTop: 100
  },
  paymentModal: {
    width: 600,
    height: 215,
    boxShadow: theme.shadows[5],
    margin: '0 auto',
    marginTop: 100
  },
  lrMargin: {
    margin: '0 18px 0 18px',
    padding: '8px 0 8px 0',
    fontSize: 24
  },
  submitBtn: {
    margin: '10px 12px 0px 16px',
    float: 'right'
  },
  commentInput: {
    margin: '8px 12px 6px 12px'
  },
});
export default styles;
