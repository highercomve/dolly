/* eslint-disable no-restricted-globals */
import {
  _getJSON,
  API_URL
} from '../lib/api.helper'

const AUTH_STATUS = `${API_URL}/auth/auth_status`
const OAUTH_AUTH_URL = `${process.env.REACT_APP_PH_URL}/oauth2/authorize`
const OAUTH_CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID
const OAUTH_DEFAULT_SCOPE = process.env.REACT_APP_OAUTH_DEFAULT_SCOPE
const redirectToDefault = () => `${location.href}`

export const JWT_NAME = '_ph_token'

export function getTokenFromImplicit (hash) {
  return (hash.match(/([^#=&]+)(=([^&]*))?/g) || []).reduce((acc, val) => {
    const [key, value] = val.split('=')
    acc[key] = value
    return acc
  }, {})
}

export const OAuthUrl = (
  scope = OAUTH_DEFAULT_SCOPE,
  redirectTo,
  responseType = 'token',
  clientId = OAUTH_CLIENT_ID
) => {
  redirectTo = !redirectTo ? redirectToDefault() : redirectTo
  return encodeURI(`${OAUTH_AUTH_URL}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectTo}&response_type=${responseType}`)
}

export const goToAuthorization = () => {
  localStorage.removeItem(JWT_NAME)
  location.href = OAuthUrl()
}

export const removeToken = () =>
  localStorage.removeItem(JWT_NAME)

export const setToken = (token) =>
  localStorage.setItem(JWT_NAME, token)

export async function getUserData (token) {
  return _getJSON(AUTH_STATUS, token)
}
