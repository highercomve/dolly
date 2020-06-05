import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
})

export default function DevicesAutoComplete ({ value, defaultClasses = {}, devices, label, onChange = () => null }) {
  const classes = useStyles()

  return (
    <Autocomplete
      clearOnEscape
      id="devices-select"
      style={{ width: '100%' }}
      options={devices}
      value={value}
      classes={{
        ...defaultClasses,
        option: classes.option
      }}
      autoHighlight
      getOptionLabel={option => option['device-nick']}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      renderOption={option => (
        <React.Fragment>
          {option['device-nick']}
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
            autoComplete: 'Device nick' // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}
