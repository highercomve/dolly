import * as Types from './types'
import * as Service from '../../services/devices.service'
import { buildBasicActions } from "../../lib/redux.helper"
import { processService } from "../../lib/api.helper"
import { catchError } from '../general-errors/actions'

const getDevicesActions = buildBasicActions(Types, Types.DEVICES_GET_ALL)
const getDeviceActions = buildBasicActions(Types, Types.DEVICES_GET)
const cloneDeviceActions = buildBasicActions(Types, Types.DEVICES_CLONE)

const validateForm = (state) => {
  const errors = {
    valid: true
  }

  const devices = Object.values(state.list)

  if (state.source === null) {
    errors.source = 'Please select a source device'
  }
  if (state.destination === null) {
    errors.destination = 'Please select a destination device'
  }

  if (state.destination !== null && !devices.some((d) => d.deviceid === state.destination.deviceid)) {
    errors.destination = 'You need to be owner of the destination device'
  }

  if (state.source !== null && state.destination !== null && state.source.deviceid === state.destination.deviceid) {
    errors.destionation = `Please select another destination device, the destination can't be the same as source`
  }
  
  if (Object.keys(errors).length > 1) {
    errors.valid = false
  }

  return errors
}

export const setDestination = (payload) => ({
  type: Types.DEVICES_SET_DESTINATION,
  payload: payload,
})

export const setSource = (payload) => ({
  type: Types.DEVICES_SET_SOURCE,
  payload: payload,
})

export const setCloneUserMeta = (payload) => ({
  type: Types.DEVICES_SET_CLONE_USER_META,
  payload: payload,
})

export const setSelectedRevision = (payload) => ({
  type: Types.DEVICES_SET_REVISION,
  payload: payload,
})

export const cleanForm = () => ({
  type: Types.DEVICES_CLEAN_FORM,
})

export const getDevices = () => async (dispatch, getState) => {
  dispatch(getDevicesActions.inProgress())
  const state = getState()

  return processService(
    async () => {
      const devicesResponse = await Service.getDevices(state.auth.token)
      const devices = await Promise.all(
        devicesResponse.json.map(async (d) => {
          const trails = await Service.getDeviceTrails(state.auth.token, d.deviceid)
          d.revisions = trails.json.sort((a, b) => a.rev < b.rev)
          return d
        })
      )
      return {
        ...devicesResponse,
        json: devices
      }
    },
    (resp) => dispatch(getDevicesActions.success(resp)),
    (error) => dispatch(catchError(error, getDevicesActions.failure))
  )
}

export const getDevice = (id) => async (dispatch, getState) => {
  dispatch(getDeviceActions.inProgress())
  const state = getState()

  return processService(
    async () => {
      const devicesResponse = await Service.getDeviceSummary(state.auth.token, id)
      const trails = await Service.getDeviceTrails(state.auth.token, id)
      devicesResponse.json.trails = trails.json
      return devicesResponse
    },
    (resp) => dispatch(getDeviceActions.success(resp)),
    (error) => dispatch(catchError(error, getDeviceActions.failure))
  )
}

export const cloneDevice = () => async (dispatch, getState) => {
  dispatch(cloneDeviceActions.inProgress())
  const state = getState()

  const validation = validateForm(state.devices)

  if (!validation.valid) {
    dispatch(cloneDeviceActions.failure({ type: 'invalid', error: 'invalid form' }))
    dispatch({
      type: Types.DEVICE_SET_FORM_ERRORS,
      payload: validation
    })
    return
  }

  const payload = {
    state: state.devices.selectedRevision.state,
    rev: -1,
    'commit-msg': `Cloned from device ${state.devices.source['device-nick']} rev (${state.devices.selectedRevision.rev})`
  }
  const newTrail = await processService(
    Service.postTrails.bind(null, state.auth.token, state.devices.destination.deviceid, payload),
    (resp) => dispatch(cloneDeviceActions.success(resp)),
    (error) => dispatch(catchError(error, cloneDeviceActions.failure))
  )

  if (state.devices.cloneUserMeta) {
    console.info("TODO: Clone user-meta is not implemented yet")
  }

  return newTrail
}
