import React, { ReactNode } from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

export interface DashboardItemProps {
  readonly children: ReactNode;
}

export const DashboardItem = ({ children, ...props }: DashboardItemProps & GridProps) => {
  const classes = useStyles();

  return (
    <Grid item {...props}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};
