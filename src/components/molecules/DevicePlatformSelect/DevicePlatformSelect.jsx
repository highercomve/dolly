import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getStatePlatforms } from '../../../lib/device.helper';
import { FormLabel } from '@material-ui/core';

export default function DevicePlatformSelect({ revision = {}, device, onChange, label }) {
  const [platforms, setPlatforms] = useState({})
  useEffect(() => {
    if (revision && revision.state) {
      setPlatforms(getStatePlatforms(revision.state, true))
    }
  }, [revision])

  useEffect(() => {
    onChange(Object.keys(platforms).reduce((acc, key) => {
      acc[key] = platforms[key].selected
      return acc
    }, {}))
  }, [platforms, onChange])

  if (!device || !revision.state) {
    return null
  }

  if (platforms.length <= 0) {
    return (
      <div>
        This device doesn't have any platform to clone
      </div>
    )
  }

  const setPlatformToClone = (event) => {
    setPlatforms({
      ...platforms,
      [event.target.value]: {
        ...platforms[event.target.value],
        selected: event.target.checked
      }
    })
  }

  return (
    <FormGroup justify="" style={{marginTop: '2em'}}>
      {label && (
        <FormLabel style={{ textAlign: 'left' }}>
          {label}
        </FormLabel>
      )}
      {Object.keys(platforms).map((k) => platforms[k]).map((p) => (
        <FormControlLabel
          key={p.name}
          control={
            <Checkbox
              id="user-meta"
              color="primary"
              value={p.name}
              checked={p.selected}
              onChange={setPlatformToClone}
              inputProps={{
                'aria-label': p.name
              }}
            />
          }
          label={p.name}
        />
      ))}
    </FormGroup>
  )
}