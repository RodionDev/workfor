import { Theme, createStyles } from '@material-ui/core/styles';
const styles = (theme: Theme) => createStyles({
  lrMargin: {
    margin: '0 18px 0 18px',
    padding: '8px 0 8px 0',
    fontSize: 24
  },
  followerContainer: {
    marginTop: 6,
    padding: '6px 18px 6px 18px',
  },
  hiddenScroll: {
    maxHeight: 700,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  confirmBtn: {
    margin: '10px 16px 0px 0px',
    float: 'right'
  }
});
export default styles;
