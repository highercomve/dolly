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

export default function DeviceRevisionSelect({ device, revision, label, onChange = () => null }) {
  const classes = useStyles();

  if (!device) {
    return null
  }

  return (
    <Autocomplete
      clearOnEscape
      autoHighlight
      id="devices-revision-select"
      style={{ width: '100%' }}
      options={device.revisions}
      classes={{
        option: classes.option,
      }}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      value={revision}
      getOptionLabel={option => `${option.rev} (${option['state-sha']})`}
      renderOption={option => (
        <React.Fragment>
          <span>{option.rev}</span>
          {option['commit-msg']}
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