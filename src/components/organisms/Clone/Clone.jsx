import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { useStyles } from "../../layouts/Main"
import { getDevices } from '../../../store/devices/actions'
import { STATUS as UserStatus } from '../../../store/auth/reducer'
import DevicesAutoComplete from '../../molecules/DevicesAutoComplete/DevicesAutoComplete'

function Clone ({ user, devices, getDevices }) {
  const classes = useStyles()

  useEffect(() => {
    if (user.status === UserStatus.SUCCESS && devices.status === null) {
      getDevices()
    }
  }, [devices, devices.status, getDevices, user, user.status])

  if (devices.list.length <= 0) {
    return null
  }
  console.log(devices.list)
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hello {user.nick}!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lets start cloning devices, this feature works with public devices or personal devices.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item md={6}>
              <DevicesAutoComplete devices={Object.values(devices.list)} label="Choose a device source" />
            </Grid>
            <Grid item md={6}>
              <DevicesAutoComplete devices={Object.values(devices.list)} label="Choose a device destination" />
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
  }
)(Clone)