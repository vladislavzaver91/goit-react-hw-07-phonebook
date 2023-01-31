import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import './index.css';
import { theme } from './constants/theme';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
