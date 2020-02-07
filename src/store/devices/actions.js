import * as Types from './types'
import * as Service from '../../services/devices.service'
import { buildBasicActions } from "../../lib/redux.helper"
import { processService } from "../../lib/api.helper"
import { catchError } from '../general-errors/actions'

const getDevicesActions = buildBasicActions(Types, Types.DEVICES_GET_ALL)
const getDeviceActions = buildBasicActions(Types, Types.DEVICES_GET)

export const getDevices = () => async (dispatch, getState) => {
  dispatch(getDevicesActions.inProgress())
  const state = getState()

  return processService(
    async () => {
      const devicesResponse = await Service.getDevices(state.auth.token)
      const devices = await Promise.all(
        devicesResponse.json.map(async (d) => {
          const trails = await Service.getDeviceTrails(state.auth.token, d.deviceid)
          d.revisions = trails.json
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