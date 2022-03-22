import { createStyles, Theme } from '@material-ui/core/styles';
const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: 6,
    '& p': {
      marginBottom: 16
    },
    paddingRight: '15px'
  },
  infoHeadline: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: '2px !important'
  },
  subText: {
    fontSize: 18,
    fontWeight: 300,
    color: '#6D6D6D'
  },
  subIcon: {
    position: 'relative',
    top: 4,
  },
  publicKey: {
    overflowWrap: 'break-word',
    color: '#6D6D6D',
    fontSize: 13,
    fontWeight: 300,
  }
});
export default styles;
