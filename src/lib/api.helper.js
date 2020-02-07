import fetch from 'isomorphic-fetch'

export const API_URL = process.env.REACT_APP_PH_API_URL || 'https://api.pantahub.com'

export const _requestContentType = async (
  url,
  token = '',
  contentType = 'application/json',
  method = 'GET',
  body = {}
) => {
  let headers = {
    'Content-Type': contentType
  }

  if (token) headers['Authorization'] = `Bearer ${token}`

  let options = {
    method,
    headers: headers
  }

  if (method !== 'GET' && method !== 'HEAD') {
    options['body'] = JSON.stringify(body)
  }

  return fetch(url, options)
}

const _requestJSON = async (url, method = 'GET', token = '', body = {}) => {
  const response = await _requestContentType(
    url,
    token,
    'application/json',
    method,
    body
  )

  const json = await response.json()

  return {
    ok: response.ok,
    redirected: response.redirected,
    headers: response.headers,
    status: response.status,
    json
  }
}

export const _getJSON = async (url, token) =>
  _requestJSON(url, 'GET', token)

export const _postJSON = async (url, token, body) =>
  _requestJSON(url, 'POST', token, body)

export const _putJSON = async (url, token, body) =>
  _requestJSON(url, 'PUT', token, body)

export const _patchJSON = async (url, token, body) =>
  _requestJSON(url, 'PATCH', token, body)

export const _delete = async (url, token) =>
  _requestJSON(url, 'DELETE', token)

export async function processService (service, success, failure) {
  let resp
  try {
    resp = await service()
    if (!resp.ok) {
      failure(typeof resp.json.Error === 'string' ? { code: resp.status, message: resp.json.Error } : resp.json)
    } else {
      success(resp.json)
    }
  } catch (err) {
    resp = {
      ok: false,
      json: {
        code: 0,
        message: err
      }
    }
    failure(resp.json)
  }
  return resp
}
