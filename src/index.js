import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import {createMuiTheme} from "@material-ui/core"

const defaultTheme = createMuiTheme()
const { breakpoints } = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        lineHeight: 1.25,
        [breakpoints.down("xs")]: {
          fontSize: "3rem"
        }
      },
      h2: {
        fontSize: "2.5rem",
        lineHeight: 1.5,
        [breakpoints.down("xs")]: {
          fontSize: "2rem"
        }
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 'bold',
        lineHeight: 1.5,
        [breakpoints.down("xs")]: {
          fontSize: "1.5rem"
        }
      },
      h4: {
        fontSize: "1.25rem",
        fontWeight: 'bold',
        lineHeight: 1.5,
        [breakpoints.down("xs")]: {
          fontSize: "1.25rem"
        }
      },
      body1: {
        fontSize: "1.2rem",
        [breakpoints.down("xs")]: {
          fontSize: "1.2rem"
        }
      },
      body2: {
        fontSize: "1.2rem",
        fontWeight: 'bold',
        [breakpoints.down("xs")]: {
          fontSize: "1.2rem"
        }
      },
      caption: {
        fontSize: "1rem",
        [breakpoints.down("xs")]: {
          fontSize: "1rem"
        }
      }
    }
  }
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
unregister();
