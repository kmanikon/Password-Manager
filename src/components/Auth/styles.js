import { makeStyles } from '@material-ui/core/styles';


const inputColor = '#B6E6FA';//'#F2733F';
const inputBorderColor = 'rgba(255, 255, 255, 0.4)';//'grey';
const inputBorderWidth = '1px';

const greyBackground = 'rgba(255, 255, 255, 0.08)';
const inputBackground = 'rgba(0, 0, 0, 0.54)';
const inputBorderHighlight = 'rgba(255, 255, 255, 0.72)';
const auxTextColor = 'rgba(255, 255, 255, 0.92)';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: greyBackground
  },
  formTitle: {
    color: inputBorderHighlight
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    color: 'black',
    backgroundColor: inputColor//theme.palette.success.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontWeight: 900
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  auxText: {
    color: auxTextColor,
    '& .MuiButton-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',//textSecondary,//theme.palette.text.secondary,//'#344', // Change button background color to dark mode palette
      '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 1)',//theme.palette.action.hover,//'rgba(255,255,255,0.5)', // Change button background color on hover
      },
  },
  },
  input: {
    margin: theme.spacing(1),
    "& .MuiInputBase-root": {
      color: '#fff',
      backgroundColor: inputBackground,
      //fontWeight: 600,
      //fontSize: 16,
      border: `${inputBorderWidth} solid ${inputBorderColor}`,
      
    },
    "& .MuiInputLabel-root": {
      color: '#fff',
      //backgroundColor: 'transparent',
      //fontWeight: 900,
      //fontSize: '16px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        //borderColor: '#E0E3E7',
        //backgroundColor: inputBackground,
        border: `${inputBorderWidth} solid ${inputBorderColor}`,
      },
      '&:hover fieldset': {
        //borderColor: '#B2BAC2',
        border: `1.5px solid ${inputBorderHighlight}`,
      },
      '&.Mui-focused fieldset': {
        //borderColor: '#6F7E8C',
        border: `1.5px solid ${inputBorderHighlight}`,
      },
    },
  },
}));