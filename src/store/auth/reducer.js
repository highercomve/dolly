/* global localStorage */
import * as Types from './types'
import jwtDecode from 'jwt-decode'
import { JWT_NAME } from '../../services/auth.service'
import { buildBasicReducers } from '../../lib/redux.helper'

const authInfo = localStorage.getItem(JWT_NAME)
const [token, username] = (authInfo || '').split('|')
const decodeJwt = (jwt = '') => {
  try {
    return jwtDecode(jwt)
  } catch (e) {
    return {}
  }
}

export const STATUS = {
  IN_PROGRESS: 'INPROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

const initialState = {
  username: username || '',
  token: token || null,
  exp: null,
  id: '',
  nick: '',
  orig_iat: null,
  prn: '',
  roles: '',
  type: '',
  gettingToken: false,
  getTokenError: null,
  status: null,
  ...decodeJwt(token)
}

const mergeState = (state, action, successPrefix) => ({
  ...state,
  ...action.payload
})

const ActionMapper = {
  ...buildBasicReducers(STATUS, Types, Types.AUTH_USER_GET, undefined, undefined, mergeState),
  [Types.AUTH_SAVE_TOKEN]: (state, action) => ({
    ...state,
    ...decodeJwt(action.payload),
    token: action.payload,
  }),
  [Types.AUTH_CLEAR_TOKEN]: (state, action) => initialState
}

export default function authReducer (state = initialState, action) {
  return ActionMapper[action.type] ? ActionMapper[action.type](state, action) : state
}
