import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#151339',
    },
    secondary: {
      main: '#f26929',
    },
  },
  typography: {
    allVariants: {
      fontSize: '1.2rem',
      color: 'white',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Saira',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
        fontSize: '1rem',
      },
    },
    MuiButtonBase: {
      root: {
        fontVariant: 'text',
      },
    },
    MuiTextField: {
      root: {
        borderColor: 'white',
      },
    },
  },
});

export default theme;
