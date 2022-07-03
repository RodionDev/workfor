import { createStyles, Theme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
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
    marginBottom: '2px !important',
    border: '1px solid transparent',
    borderRadius: 3,
    transition: 'background-color 250ms ease-out, border 250ms ease-out',
    '&:hover': {
      borderColor: pink.A400,
      backgroundColor: 'rgba(245, 0, 87, 0.08)',
      cursor: 'pointer'
    }
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
  },
  saveBtn: {
    height: '100%'
  },
  paymenHistory: {
    marginTop: 25,
    paddingRight: '15px'
  }
});
export default styles;
