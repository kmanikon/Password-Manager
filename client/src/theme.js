import { createTheme } from '@material-ui/core/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: "rgb(33, 37, 39)",
      },
    },
});

export default darkTheme;