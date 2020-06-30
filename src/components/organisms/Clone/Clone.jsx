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
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import Alert from '@material-ui/lab/Alert'

import { useStyles } from '../../layouts/Main'
import { STATUS as UserStatus } from '../../../store/auth/reducer'
import { STATUS as DevicesStatus } from '../../../store/devices/reducer'
import DevicesAutoComplete from '../../molecules/DevicesAutoComplete/DevicesAutoComplete'
import ConfirmButton from '../../atoms/ConfirmButton/ConfirmButton'
import {
  getDevices,
  setSourceAndGetPublic,
  setDestination,
  setCloneUserMeta,
  cleanForm,
  setSelectedRevision,
  cloneDevice,
  setPlatformToClone
} from '../../../store/devices/actions'
import DeviceRevisionSelect from '../../molecules/DeviceRevisionSelect/DeviceRevisionSelect'
import Loader from '../../atoms/Loader/Loader'
import DevicePlatformSelect from '../../molecules/DevicePlatformSelect/DevicePlatformSelect'
import { resolvePath } from '../../../lib/utils.helper'

// if both devices have an arch in meta we can filter...
const filterDeviceByArch = (source) => (device) => {
  return !resolvePath(device, 'device-meta', {})['pantavisor.arch']
	|| !resolvePath(source, 'device-meta', {})['pantavisor.arch']
    ? true
    : resolvePath(source, 'device-meta', {})['pantavisor.arch'] ===
      resolvePath(device, 'device-meta', {})['pantavisor.arch']
}

function Clone ({
  user,
  devices,
  getDevices,
  setSourceAndGetPublic,
  setDestination,
  setCloneUserMeta,
  cleanForm,
  setSelectedRevision,
  cloneDevice,
  setPlatformToClone,
  setDestinationPlatformToClone
}) {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.status === UserStatus.SUCCESS && devices.status === null) {
      getDevices()
    }
  }, [devices, devices.status, getDevices, user, user.status])

  useEffect(() => {
    if (devices.status === DevicesStatus.CLONING.IN_PROGRESS || devices.status === DevicesStatus.WAITING_DEPLOY) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [devices, devices.status])

  if (devices.status === DevicesStatus.IN_PROGRESS) {
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
            Welcome, {user.nick}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Please wait a second, first we need to load your devices.
          </Typography>
          <div className={classes.flex} style={{ height: '200px' }}>
            <Loader size="lg" />
          </div>
        </Container>
      </div>
    )
  }

  if (devices.list.length <= 0) {
    return null
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
          Welcome, {user.nick}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lets start cloning devices, this feature works with public devices or personal devices.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item md={5} xs={12}>
              <DevicesAutoComplete
                value={devices.source}
                devices={Object.values(devices.list)}
                label="Choose a device source"
                onChange={setSourceAndGetPublic}
              />
              <br />
              <DeviceRevisionSelect
                className={classes.vertialSpace}
                device={devices.source}
                revision={devices.selectedRevision.src}
                label="Choose revision source"
                onChange={setSelectedRevision}
              />
              <DevicePlatformSelect
                device={devices.source}
                label="Select platforms to be cloned"
                revision={devices.selectedRevision.src}
                onChange={setPlatformToClone}
              />
              {devices.selectedRevision.src && (
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
              )}
            </Grid>
            <Grid item md={2} xs={12}>
              <DoubleArrowIcon className="clone-icon" fontSize="large"/>
            </Grid>
            <Grid item md={5} xs={12}>
              <DevicesAutoComplete
                value={devices.destination}
                devices={Object.values(devices.list).filter(filterDeviceByArch(devices.source))}
                label="Choose a device destination"
                onChange={setDestination}
              />
              {devices.destination && (
                <div className="mt-sm--2 mt--7">
                  <DevicePlatformSelect
                    device={devices.destination}
                    label="Select platforms you want to keep"
                    revision={devices.selectedRevision.dest}
                    onChange={setDestinationPlatformToClone}
                  />
                </div>
              )}
            </Grid>
            <Grid item md={12}>
              {devices.status !== DevicesStatus.CLONING.SUCCESS && loading && (
                <div className={classes.linearProgress} ><LinearProgress /> </div>
              )}
              {devices.status !== DevicesStatus.CLONING.SUCCESS && !loading && (
                <div className={classes.flex}>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={cleanForm}>
                    Clear form
                  </Button>
                  <ConfirmButton
                    variant="contained"
                    color="primary"
                    buttonTxt="Start update process"
                    disabled={!devices.source || !devices.destination || !devices.selectedRevision.src}
                    dialogText={
                      !!devices.source && !!devices.destination && !!devices.selectedRevision.src
                        ? `Are you sure you want to clone ${devices.source['device-nick']} (${devices.selectedRevision.src.rev}) to ${devices.destination['device-nick']}?`
                        : ''
                    }
                    onConfirm={cloneDevice}
                  />
                </div>
              )}
              {devices.status === DevicesStatus.CLONING.SUCCESS && (
                <Alert severity="success">Your device has been cloned!</Alert>
              )}
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
    user: state.auth
  }),
  {
    getDevices,
    setSourceAndGetPublic,
    setDestination,
    setCloneUserMeta,
    cleanForm,
    setSelectedRevision,
    cloneDevice,
    setPlatformToClone,
    setDestinationPlatformToClone: (payload) => setPlatformToClone(payload, 'dest')
  }
)(Clone)
