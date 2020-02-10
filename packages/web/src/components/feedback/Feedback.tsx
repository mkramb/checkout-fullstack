import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { FeedbackItem, RequestState, isValidFeedback } from '../../models';

export type FormEvent = React.ChangeEvent<HTMLInputElement>;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
  },
  multilineTextField: {
    margin: theme.spacing(1),
    marginTop: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export interface FeedbackProps {
  readonly request: RequestState;
  readonly submitFeedback: (data: Partial<FeedbackItem>) => void;
}

export const Feedback = ({ submitFeedback }: FeedbackProps) => {
  const classes = useStyles();
  const [data, setData] = useState<Partial<FeedbackItem>>({});

  const handleCallback = (field: keyof FeedbackItem) => (event: FormEvent) =>
    setData({ ...data, [field]: event.target.value });

  const submitCallback = useCallback(() => {
    if (isValidFeedback(data)) {
      submitFeedback(data);
      setData({});
    }
  }, [data]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Name"
        className={classes.textField}
        onChange={handleCallback('name')}
        variant={'filled'}
        value={data?.name ?? ''}
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        onChange={handleCallback('email')}
        value={data?.email ?? ''}
        variant={'filled'}
        fullWidth
      />
      <Box component="fieldset" borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="rating"
          value={data?.rating ?? 0}
          onChange={(event: FormEvent) => {
            setData({ ...data, rating: +event.target.value });
          }}
        />
      </Box>
      <TextField
        rows="5"
        id="comment"
        label="Comment"
        variant="filled"
        className={classes.multilineTextField}
        value={data?.comment ?? ''}
        onChange={handleCallback('comment')}
        fullWidth
        multiline
      />
      <Button
        startIcon={<CloudUploadIcon />}
        className={classes.button}
        onClick={submitCallback}
        variant="contained"
        color="primary">
        Comment
      </Button>
    </form>
  );
};
