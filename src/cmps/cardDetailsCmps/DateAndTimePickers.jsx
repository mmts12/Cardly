import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function DateAndTimePickers({ onSetDate }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={onSetDate}
        id="datetime-local"
        type="datetime-local"
        defaultValue="2021-01-23T12:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
