import { makeStyles } from '@material-ui/core/styles';

const textPrimary = 'rgba(0, 0, 0, 0.87)';
const textSecondary = 'rgba(0, 0, 0, 0.6)';
const textDisabled = 'rgba(0, 0, 0, 0.38)';

const buttonActive = 'rgba(0, 0, 0, 0.54)';
const buttonHover = 'rgba(0, 0, 0, 0.04)';
const buttonSelected = 'rgba(0, 0, 0, 0.08)';
const buttonDisabled = 'rgba(0, 0, 0, 0.26)';
const buttonDisabledBackground = 'rgba(0, 0, 0, 0.12)';

const buttonTextColor = '#fff';

const backgroundDefault = '#fff';
const backgroundPaper = '#fff';

const paperBackground = 'rgba(255, 255, 255, 0.08)';

const divider = 'rgba(0, 0, 0, 0.12)';

export default makeStyles((theme) => ({

    // text fields:
    root: {
        
        '& label': {
            color: '#fff',//'rgba(255, 255, 255, 0.7)', // Change label color to dark mode palette
        },
        '& label.Mui-focused': {
            color: '#fff', // Change focused label color to white
        },
        
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgba(255, 255, 255, 0.7)', // Change underline color to dark mode palette
        },
        
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.7)', // Change border color to dark mode palette
            },
            '&:hover fieldset': {
                borderColor: '#fff', // Change border color on hover to white
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.7)', // Change focused border color to dark mode palette
            },
        },
        

       
        
        

        '& .MuiPaper-root': {
            backgroundColor: paperBackground,//'rgba(255, 255, 255, 0.08)', // Change background color of Paper elements to dark mode palette
        },
        '& .MuiTypography-root': {
            color: buttonTextColor,//'#fff', // Change typography color to white for dark mode
            //fontWeight: 700,
            //fontSize: 22,
        },
        '& .MuiButton-root': {
            color: buttonTextColor,//'#FFF', // Change button text color to white
            backgroundColor: textSecondary,//theme.palette.text.secondary,//'#344', // Change button background color to dark mode palette
            '&:hover': {
                backgroundColor: buttonHover,//theme.palette.action.hover,//'rgba(255,255,255,0.5)', // Change button background color on hover
            },
        },
    },
}));
