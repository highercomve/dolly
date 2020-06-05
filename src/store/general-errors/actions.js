import * as Types from './types'
import { Login } from '../auth/actions'

export const catchError = (apiError, cb) => (dispatch) => {
  dispatch(setError(apiError.code, apiError.messsage))
  dispatch(cb(apiError))
}

export function setError (type, error) {
  if (type === 401) {
    return Login()
  }
  return {
    type: Types.GENERAL_ERROR_SET,
    payload: {
      type,
      error
    }
  }
}

export function clearError () {
  return {
    type: Types.GENERAL_ERROR_CLEAN
  }
}
