import * as Types from './types'
import { buildBasicReducers } from '../../lib/redux.helper'

export const STATUS = {
  IN_PROGRESS: 'inprogr',
  FAILURE: 'failure',
  SUCCESS: 'success',
  CLONING: {
    IN_PROGRESS: 'IN_PROGRESS',
    FAILURE: 'FAILURE',
    SUCCESS: 'SUCCESS',
  },
  WAITING_DEPLOY: 'WAITING_DEPLOY' 
}

export const initialState = {
  list: [],
  status: null,
  clone: null,
  source: null,
  destination: null,
  selectedRevision: null,
  cloneUserMeta: false,
  formErrors: {},
}

const mergeState = (state, action, successPrefix) => ({
  ...state[successPrefix],
  ...action.payload
})

const ActionMapper = {
  ...buildBasicReducers(STATUS, Types, Types.DEVICES_GET_ALL, 'list', undefined, mergeState),
  ...buildBasicReducers(STATUS.CLONING, Types, Types.DEVICES_CLONE, 'clone', undefined, mergeState),
  [Types.DEVICES_SET_DESTINATION]: (s, a) => ({ ...s, destination: a.payload }),
  [Types.DEVICES_SET_CLONE_USER_META]: (s, a) => ({ ...s, cloneUserMeta: a.payload }),
  [Types.DEVICE_SET_FORM_ERRORS]: (s, a) => ({ ...s, formErrors: a.payload }),
  [Types.DEVICES_SET_REVISION]: (s, a) => ({ ...s, selectedRevision: a.payload }),
  [Types.DEVICES_SET_SOURCE]: (s, a) => ({
    ...s,
    source: a.payload,
    selectedRevision: a.payload.revisions.find(r => r.rev === a.payload.revision)
  }),
  [Types.DEVICES_CLEAN_FORM]: (state) => ({
    ...state,
    source: null,
    destination: null,
    selectedRevision: null,
    cloneUserMeta: false
  }),
}

export default function reducer (state = initialState, action) {
  return ActionMapper[action.type] ? ActionMapper[action.type](state, action) : state
}
