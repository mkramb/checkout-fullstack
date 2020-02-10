import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FeedbackContainer from '../containers/FeedbackContainer';
import FeedbackListContainer from '../containers/FeedbackListContainer';
import FeedbackTrendsContainer from '../containers/FeedbackTrendsContainer';
import { DashboardTitle } from './DashboardTitle';
import { DashboardItem } from './DashboardItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
    marginLeft: 0,
    marginRight: 0,
  },
}));

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <DashboardTitle title="Feedback Dashboard" />
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <DashboardItem lg={6} xs={12}>
              <FeedbackContainer />
            </DashboardItem>
            <DashboardItem lg={6} xs={12}>
              <FeedbackTrendsContainer />
            </DashboardItem>
            <DashboardItem xs={12}>
              <FeedbackListContainer />
            </DashboardItem>
          </Grid>
        </Container>
      </div>
    </>
  );
};
