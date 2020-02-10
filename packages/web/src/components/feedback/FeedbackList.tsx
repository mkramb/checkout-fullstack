import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import { FeedbackItem, RequestState } from '../../models';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

export interface FeedbackListProps {
  readonly items: FeedbackItem[];
  readonly request: RequestState;
  readonly fetchItems: () => void;
}

export const FeedbackList = ({ items, fetchItems }: FeedbackListProps) => {
  const classes = useStyles();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">
                  <Rating value={item.rating} readOnly />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
