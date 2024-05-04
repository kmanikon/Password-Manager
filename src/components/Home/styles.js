import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    // text fields:
    root: {
        '& label': {
            color: 'rgba(255, 255, 255, 0.7)', // Change label color to dark mode palette
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
                backgroundColor: 'rgb(33, 37, 39)',
            },
            '&:hover fieldset': {
                borderColor: '#fff', // Change border color on hover to white
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.7)', // Change focused border color to dark mode palette
            },
        },
        

        
    '& .MuiPaper-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)', // Change background color of Paper elements to dark mode palette
    },
    '& .MuiTypography-root': {
        color: '#fff', // Change typography color to white for dark mode
    },
    '& .MuiButton-root': {
        color: '#FFFFFF', // Change button text color to white
        backgroundColor: theme.palette.text.secondary,//'#344', // Change button background color to dark mode palette
        '&:hover': {
            backgroundColor: theme.palette.action.hover,//'rgba(255,255,255,0.5)', // Change button background color on hover
        },
    },
  },
}));
