import { createStyles, Theme } from '@material-ui/core/styles';
const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: 36,
    '& p': {
      marginBottom: 32
    }
  },
  infoHeadline: {
    fontSize: 24,
    fontWeight: 800,
  },
  subText: {
    fontSize: 18,
    fontWeight: 300,
    color: '#6D6D6D'
  },
  subIcon: {
    position: 'relative',
    top: 4
  }
});
export default styles;
