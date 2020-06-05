import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
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

const filter = createFilterOptions()

export default function DevicesAutoComplete ({ value, defaultClasses = {}, devices, label, onChange = () => null }) {
  const classes = useStyles()

  return (
    <Autocomplete
      id="devices-select"
      clearOnEscape
      freeSolo
      autoHighlight
      style={{ width: '100%' }}
      options={devices}
      value={value}
      classes={{
        ...defaultClasses,
        option: classes.option
      }}
      getOptionLabel={option => option['device-nick']}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        if (params.inputValue !== '') {
          filtered.push({
            'device-nick': `Search ${params.inputValue} ...`,
            deviceid: params.inputValue
          })
        }

        return filtered
      }}
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
