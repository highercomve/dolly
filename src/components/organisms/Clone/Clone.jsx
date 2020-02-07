import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { useStyles } from "../../layouts/Main"
import { STATUS as UserStatus } from '../../../store/auth/reducer'
import { STATUS as DevicesStatus } from '../../../store/devices/reducer'
import DevicesAutoComplete from '../../molecules/DevicesAutoComplete/DevicesAutoComplete'
import ConfirmButton from '../../atoms/ConfirmButton/ConfirmButton'
import {
  getDevices,
  setSource,
  setDestination,
  setCloneUserMeta,
  cleanForm,
  setSelectedRevision,
  cloneDevice
} from '../../../store/devices/actions'
import DeviceRevisionSelect from '../../molecules/DeviceRevisionSelect/DeviceRevisionSelect'

function Clone ({
  user,
  devices,
  getDevices,
  setSource,
  setDestination,
  setCloneUserMeta,
  cleanForm,
  setSelectedRevision,
  cloneDevice
}) {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.status === UserStatus.SUCCESS && devices.status === null) {
      getDevices()
    }
  }, [devices, devices.status, getDevices, user, user.status])

  useEffect(() => {
    if (devices.status === DevicesStatus.IN_PROGRESS || devices.status === DevicesStatus.CLONING || devices.status === DevicesStatus.WAITING_DEPLOY) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [devices, devices.status])

  if (devices.list.length <= 0) {
    return null
  }
  
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome, {user.nick} to Dolly!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lets start cloning devices, this feature works with public devices or personal devices.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item md={5}>
              <DevicesAutoComplete
                value={devices.source}
                devices={Object.values(devices.list)}
                label="Choose a device source"
                onChange={setSource}
              />
              <br />
              <DeviceRevisionSelect
                className={classes.vertialSpace}
                device={devices.source}
                revision={devices.selectedRevision}
                label="Choose revision source"
                onChange={setSelectedRevision}
              />
              <FormGroup justify="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      id="user-meta"
                      color="primary"
                      checked={devices.cloneUserMeta}
                      onChange={(e) => setCloneUserMeta(e.target.checked) }
                      inputProps={{
                        'aria-label': 'Clone all user-meta data (only if you are the owner)'
                      }}
                    />
                  }
                  label="Clone all user-meta data (only device owner)"
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <DoubleArrowIcon style={{ marginTop: '10px' }} fontSize="large"/>
            </Grid>
            <Grid item md={5}>
              <DevicesAutoComplete
                value={devices.destination}
                devices={Object.values(devices.list)}
                label="Choose a device destination"
                onChange={setDestination}
              />
            </Grid>
            <Grid item md={12}>
              {loading
                ? <div className={classes.linearProgress} ><LinearProgress /> </div>
                : <div className={classes.flex}>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={cleanForm}>
                    Clear form
                  </Button>
                  <ConfirmButton
                    variant="contained"
                    color="primary"
                    buttonTxt="Start cloning process"
                    disabled={!devices.source || !devices.destination || !devices.selectedRevision}
                    dialogText={
                      !!devices.source && !!devices.destination && !!devices.selectedRevision
                      ? `Are you sure you want to clone ${devices.source['device-nick']} (${devices.selectedRevision.rev}) to ${devices.destination['device-nick']}?`
                      : ''
                    }
                    onConfirm={cloneDevice}
                  />
                </div>
              }
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default connect(
  (state) => ({
    devices: state.devices,
    user: state.auth,
  }),
  {
    getDevices,
    setSource,
    setDestination,
    setCloneUserMeta,
    cleanForm,
    setSelectedRevision,
    cloneDevice
  }
)(Clone)