import { createStyles, Theme } from '@material-ui/core/styles';
const styles  = (theme: Theme) => createStyles({
  image: {
    width: '-webkit-fill-available',
    maxHeight: 500,
    height: '100%',
    minHeight: 320
  }
});
export default styles;
