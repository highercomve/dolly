/* eslint-disable no-restricted-globals */

import * as Types from './types'
import { buildBasicActions } from "../../lib/redux.helper"
import { processService } from "../../lib/api.helper"
import { catchError } from "../general-errors/actions"
import { goToAuthorization, removeToken, getTokenFromImplicit, getUserData, setToken } from "../../services/auth.service"

const getUserActions = buildBasicActions(Types, Types.AUTH_USER_GET)

export const Login = () => {
  goToAuthorization()
  return {
    type: Types.AUTH_CLEAR_TOKEN,
  }
}

export const Logout = () => {
  removeToken()
  return {
    type: Types.AUTH_CLEAR_TOKEN,
  }
}

export const SaveToken = (hash) => {
  const token = getTokenFromImplicit(hash)
  setToken(token.access_token)
  return {
    type: Types.AUTH_SAVE_TOKEN,
    payload: token.access_token
  }
}

export const SaveTokenAndRedirect = (hash) => (dispatch) => {
  dispatch(SaveToken(hash))
  location.hash = ''
}

export const GetUser = () => async (dispatch, getState) => {
  dispatch(getUserActions.inProgress())
  const state = getState()

  if (!state.auth.token) {
    return null
  }

  return processService(
    getUserData.bind(null, state.auth.token),
    (resp) => dispatch(getUserActions.success(resp)),
    (error) => dispatch(catchError(error, getUserActions.failure))
  )
}