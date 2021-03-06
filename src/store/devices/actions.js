import * as Types from './types'
import * as Service from '../../services/devices.service'
import { buildBasicActions } from '../../lib/redux.helper'
import { processService } from '../../lib/api.helper'
import { catchError } from '../general-errors/actions'
import { getStatePlatformsFiltered, mergeToDestination } from '../../lib/device.helper'
import { resolvePath } from '../../lib/utils.helper'

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

  if (Object.keys(errors).length > 1) {
    errors.valid = false
  }

  return errors
}

export const setPlatformToClone = (payload, pointer = 'src') => ({
  type: Types.DEVICE_SET_PLATFORM_TO_CLONE,
  payload,
  pointer
})

export const setDestination = (payload, pointer = 'src') => ({
  type: Types.DEVICES_SET_DESTINATION,
  payload,
  pointer
})

export const setSource = (payload) => ({
  type: Types.DEVICES_SET_SOURCE,
  payload: payload
})

export const setSourceAndGetPublic = (payload) => async (dispatch, getState) => {
  if (!payload) {
    return dispatch(setSource(null))
  }
  const state = getState()
  const alreadyOnList = Object.keys(state.devices.list).some(
    key => state.devices.list[key].deviceid === payload.deviceid
  )

  if (alreadyOnList) {
    return dispatch(setSource(payload))
  }

  const getDeviceService = payload.deviceid.indexOf('/') >= 0 ? getDeviceByNick : getDevice
  return processService(
    async () => dispatch(getDeviceService(payload.deviceid)),
    (resp) => dispatch(setSource(resp)),
    (error) => console.info(error)
  )
}

export const setCloneUserMeta = (payload) => ({
  type: Types.DEVICES_SET_CLONE_USER_META,
  payload: payload
})

export const setSelectedRevision = (payload, pointer = 'src') => ({
  type: Types.DEVICES_SET_REVISION,
  payload,
  pointer
})

export const cleanForm = () => ({
  type: Types.DEVICES_CLEAN_FORM
})

export const getDevices = () => async (dispatch, getState) => {
  dispatch(getDevicesActions.inProgress())
  const state = getState()

  return processService(
    async () => {
      const devicesSummaryResponse = await Service.getDevicesSummary(state.auth.token)
      const devicesResponse = await Service.getDevices(state.auth.token)
      const devices = await Promise.all(
        devicesSummaryResponse.json.map(async (d) => {
          try {
            const trails = await Service.getDeviceTrails(state.auth.token, d.deviceid)
            const device = resolvePath(devicesResponse, 'json', []).find((_d) => _d.id === d.deviceid)
            if (device) {
              Object.assign(d, device)
            }
            d.revisions = trails.json.sort((a, b) => a.rev < b.rev)
            return d
          } catch (e) {
            console.info(e)
            return d
          }
        })
      )
      return {
        ...devicesSummaryResponse,
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
      devicesResponse.json.revisions = trails.json
      return devicesResponse
    },
    (resp) => dispatch(getDeviceActions.success(resp)),
    (error) => dispatch(catchError(error, getDeviceActions.failure))
  )
}

export const getDeviceByNick = (deviceNick) => async (dispatch, getState) => {
  dispatch(getDeviceActions.inProgress())
  const state = getState()

  return processService(
    async () => {
      const deviceData = await Service.getDeviceByNick(state.auth.token, deviceNick)
      const devicesResponse = await Service.getDeviceSummary(state.auth.token, deviceData.json.id)
      const trails = await Service.getDeviceTrails(state.auth.token, deviceData.json.id)
      devicesResponse.json.revisions = trails.json
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

  const selectSrcState = getStatePlatformsFiltered(
    state.devices.selectedRevision.src.state,
    state.devices.platformToClone.src
  )
  const selectedDestState = getStatePlatformsFiltered(
    state.devices.selectedRevision.dest.state,
    state.devices.platformToClone.dest
  )

  const payload = {
    state: mergeToDestination(selectSrcState, selectedDestState),
    rev: -1,
    'commit-msg': `Cloned from device ${state.devices.source['device-nick']} rev (${state.devices.selectedRevision.src.rev})`
  }

  const newTrail = await processService(
    Service.postTrails.bind(null, state.auth.token, state.devices.destination.deviceid, payload),
    (resp) => dispatch(cloneDeviceActions.success(resp)),
    (error) => dispatch(catchError(error, cloneDeviceActions.failure))
  )

  if (state.devices.cloneUserMeta) {
    console.info('TODO: Clone user-meta is not implemented yet')
  }

  return newTrail
}
