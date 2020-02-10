import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from '../utils/configureStore';
import { Dashboard } from './dashboard/Dashboard';

const store = configureStore();

export const Application = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </>
);
