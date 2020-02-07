import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function DevicesAutoComplete({ devices, label }) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="devices-select"
      style={{ width: '100%' }}
      options={devices}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.device}
      renderOption={option => (
        <React.Fragment>
          <span>{option.status}</span>
          {option['device-nick']} ({option.device})
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'Device nick', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}