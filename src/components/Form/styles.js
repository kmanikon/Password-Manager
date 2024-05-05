import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
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
    marginTop: 10
  },
  input: {
    "& .MuiInputBase-root": {
      color: '#fff',
      backgroundColor: 'rgb(33, 37, 39)',
    },
    "& .MuiInputLabel-root": {
      color: '#fff',
      backgroundColor: 'rgb(33, 37, 39)',
    },
  },
}));