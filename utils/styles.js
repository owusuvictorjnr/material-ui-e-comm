import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },

  main: {
    minHeight: '80vh',
    backgroundColor: '#fff',
    // '& a': {
    //     color: 'black',
    // },
  },

  footer: {
    
    textAlign: 'center',
  },
});

export default useStyles;
