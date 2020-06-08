import * as Types from './types'
import { buildBasicReducers } from '../../lib/redux.helper'
import { getLatestRev } from '../../lib/device.helper'

export const STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
  CLONING: {
    IN_PROGRESS: 'CLONING_IN_PROGRESS',
    FAILURE: 'CLONING_FAILURE',
    SUCCESS: 'CLONING_SUCCESS'
  },
  WAITING_DEPLOY: 'WAITING_DEPLOY'
}

export const initialState = {
  list: [],
  status: null,
  clone: null,
  source: null,
  destination: null,
  selectedRevision: {
    src: null,
    dest: null
  },
  cloneUserMeta: false,
  platformToClone: {
    src: null,
    dest: null
  },
  formErrors: {}
}

const mergeState = (state, action, successPrefix) => ({
  ...state[successPrefix],
  ...action.payload
})

const ActionMapper = {
  ...buildBasicReducers(STATUS, Types, Types.DEVICES_GET_ALL, 'list', undefined, mergeState),
  ...buildBasicReducers(STATUS.CLONING, Types, Types.DEVICES_CLONE, 'clone', undefined, mergeState),
  [Types.DEVICES_SET_DESTINATION]: (s, a) => ({
    ...s,
    destination: a.payload,
    selectedRevision: {
      ...s.selectedRevision,
      dest: getLatestRev(a.payload)
    }
  }),
  [Types.DEVICES_SET_CLONE_USER_META]: (s, a) => ({
    ...s,
    cloneUserMeta: a.payload
  }),
  [Types.DEVICE_SET_FORM_ERRORS]: (s, a) => ({
    ...s,
    formErrors: a.payload
  }),
  [Types.DEVICES_SET_REVISION]: (s, a) => ({
    ...s,
    selectedRevision: {
      ...s.selectedRevision,
      [a.pointer]: a.payload
    }
  }),
  [Types.DEVICES_SET_SOURCE]: (s, a) => ({
    ...s,
    source: !a.payload ? null : a.payload,
    selectedRevision: {
      ...s.selectedRevision,
      src: !a.payload
        ? null
        : a.payload.revisions && a.payload.revisions.length
          ? getLatestRev(a.payload)
          : null
    }
  }),
  [Types.DEVICE_SET_PLATFORM_TO_CLONE]: (state, action) => ({
    ...state,
    platformToClone: {
      ...state.platformToClone,
      [action.pointer]: action.payload
    }
  }),
  [Types.DEVICES_CLEAN_FORM]: (state) => ({
    ...state,
    source: null,
    destination: null,
    selectedRevision: null,
    cloneUserMeta: false
  })
}

export default function reducer (state = initialState, action) {
  return ActionMapper[action.type] ? ActionMapper[action.type](state, action) : state
}
