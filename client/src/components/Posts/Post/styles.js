import { makeStyles } from '@material-ui/core/styles';

const inputBorderWidth = '1px';
const inputBorderColor = 'rgba(255, 255, 255, 0.4)';//'grey';

const inputBackground = 'rgba(0, 0, 0, 0.54)';//'black';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '12px',
    right: '20px',
    color: 'grey',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '8px 16px 0 calc(2.5% + 5px)',
    fontWeight: 900,
  },
  link: {
    color: '#fff',
    textDecoration: 'none', // Remove underline by default
    transition: 'text-decoration 0.3s ease', // Add transition for smooth effect
  },
  linkHovered: {
    textDecoration: 'underline', // Show underline on hover
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    //justifyContent: 'space-between',
    padding: '8px 2.5%',
  },
  progressBar: {
    paddingLeft: '25px',
  },
  marker: {
    content: "",
    position: 'absolute',
    top: 0,
    bottom: 0,

    width: '10px',
    height: '15px',

    backgroundColor: 'black',
    pointerEvents: 'none',
    display: 'block',
  },
  voiceSel: {
    marginLeft: '15px'
  },
  input: {
    maxWidth: '95%',
    marginLeft: '2.5%',
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
    }
  },
  action: {
    padding: 5,
    textTransform: 'none'
  },
  icon: {
    paddingRight: 5
  },
});



