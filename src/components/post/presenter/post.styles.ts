import { Theme, createStyles } from '@material-ui/core/styles';
const styles = (theme: Theme) => createStyles({
  root: {
    marginBottom: 12,
  },
  lrMargin: {
    margin: '0 18px 0 18px',
    padding: '8px 0 8px 0',
    fontSize: 24
  },
  hiddenScroll: {
    maxHeight: 700,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  postContainer: {
    marginTop: 8,
    padding: '6px 18px 24px 18px',
  },
  posterName: {
    fontSize: 15,
    fontWeight: 800,
    display: 'inline'
  },
  posterSubText: {
    fontSize: 15,
    fontWeight: 300,
    color: '#6D6D6D',
    textTransform: 'none',
    display: 'inline'
  },
  postContent: {
    fontSize: 15,
    fontWeight: 400,
    whiteSpace: 'pre-wrap'
  },
  like: {
    padding: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    '&:hover': {
      '& svg': {
        fill: theme.palette.secondary.light
      }
    }
  },
  likeHover: {
    transition: 'color .1s ease-in',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.light
    }
  },
  share: {
    padding: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    '&:hover': {
      '& svg': {
        fill: '#4CAF50'
      }
    }
  },
  shareHover: {
    transition: 'color .1s ease-in',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#4CAF50'
    }
  },
  comment: {
    padding: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    '&:hover': {
      '& svg': {
        fill: '#536DFE'
      }
    }
  },
  commentHover: {
    transition: 'color .1s ease-in',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#536DFE'
    }
  },
  disableHover: {
    transition: 'color .1s ease-in',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.light
    }
  },
  avatar: {
    margin: '0 auto'
  },
  reactionGroup: {
    marginTop: 16
  },
  modal: {
    width: 600,
    height: 410,
    boxShadow: theme.shadows[5],
    margin: '0 auto',
    marginTop: 100
  },
  commentHiddenScroll: {
    maxHeight: 270,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  commentInput: {
    margin: '8px 12px 6px 12px'
  },
  submitBtn: {
    margin: '10px 12px 0px 16px',
    float: 'right'
  }
});
export default styles;
