import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export interface DashboardTitleProps {
  readonly title: string;
}

export const DashboardTitle = ({ title }: DashboardTitleProps) => (
  <AppBar position="static">
    <Toolbar>{title}</Toolbar>
  </AppBar>
);
