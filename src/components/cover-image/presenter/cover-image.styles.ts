import { createStyles, Theme } from '@material-ui/core/styles';
const styles  = (theme: Theme) => createStyles({
  root: {
    flex: 1,
    maxHeight: 500,
    order: 1
  },
  image: {
    width: '-webkit-fill-available',
    maxHeight: '500px',
    minHeight: '100%'
  }
});
export default styles;
