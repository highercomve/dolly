import * as Types from './types'
import { buildBasicReducers } from '../../lib/redux.helper'

export const STATES = {
  IN_PROGRESS: 'inprogr',
  FAILURE: 'failure',
  SUCCESS: 'success'
}

export const initialState = {
  list: [],
  status: null,
}

const mergeState = (state, action, successPrefix) => ({
  ...state[successPrefix],
  ...action.payload
})

const ActionMapper = {
  ...buildBasicReducers(STATES, Types, Types.DEVICES_GET_ALL, 'list', undefined, mergeState)
}

export default function reducer (state = initialState, action) {
  return ActionMapper[action.type] ? ActionMapper[action.type](state, action) : state
}
