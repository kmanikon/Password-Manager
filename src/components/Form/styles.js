import { makeStyles } from '@material-ui/core/styles';

const inputBorderWidth = '1px';
const inputBorderColor = 'rgba(255, 255, 255, 0.4)';//'grey';

const inputBackground = 'rgba(0, 0, 0, 0.54)';//'black';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
    },
  },
  paper: {
    padding: theme.spacing(1.5),
    borderRadius: '15px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 0,
    height: 35
  },
  input: {
    "& .MuiInputBase-root": {
      color: '#fff',
      backgroundColor: inputBackground,
      fontWeight: 600,
      fontSize: 16,
      borderBottom: `${inputBorderWidth} solid ${inputBorderColor}`,
    },
    "& .MuiInputLabel-root": {
      //color: '#fff',
      backgroundColor: 'transparent',
      fontWeight: 900,
      fontSize: '16px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  },
  inputContainer: {
    borderTop: `${inputBorderWidth} solid ${inputBorderColor}`, 
    borderLeft: `${inputBorderWidth} solid ${inputBorderColor}`, 
    borderRight: `${inputBorderWidth} solid ${inputBorderColor}`, 
    borderRadius: "7px",
  }
}));