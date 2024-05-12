import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

import './index.css';

import App from './App';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import darkTheme from './theme';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
          <Router>
                <Provider store={store}>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </Provider>
          </Router>
      </React.StrictMode>,
    document.getElementById('root'),
  );