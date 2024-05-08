import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const paperBackground = 'rgba(255, 255, 255, 0.08)';

const inputBackground = 'rgba(0, 0, 0, 0.34)';

const titleColor = '#B6E6FA';//'grey';

export default makeStyles((theme) => ({
  appBar: {
    //borderBottomRadius: 15,
    marginBottom: 30,
    //margin: '30px 0',
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //padding: '10px 50px',
    background: inputBackground,
    //width: '100vw'
  },
  /*
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  */
  heading: {
    color: titleColor,//'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
    marginLeft: '30%',
    whiteSpace: 'nowrap',

    /*
    // Add media queries for different screen widths
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.15rem', // Adjust this value as needed for smaller screens
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '4rem', // Adjust this value as needed for medium screens
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem', // Adjust this value as needed for larger screens
    },
    */
   fontSize: '2.5rem',
   fontWeight: 400
  },
  image: {
    marginLeft: '25px',
    marginTop: '5px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
    marginRight: '5%'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));