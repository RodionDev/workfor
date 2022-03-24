import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
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
    fontSize: 11,
    overflowWrap: 'break-word'
  },
  avatar: {
    width: 142,
    height: 142,
  },
  subIcon: {
    position: 'relative',
    top: 4
  },
})

export default styles;
