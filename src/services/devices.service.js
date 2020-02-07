import {
  _getJSON,
  _postJSON,
  _putJSON,
  API_URL
} from '../lib/api.helper'

const DEVS_URL = `${API_URL}/devices`
const SUMMARY_URL = `${API_URL}/trails/summary`

const trailsUrl = (deviceId) =>
  `${API_URL}/trails/${deviceId}/steps`

const tailsDeviceSummaryUrl = (id) =>
  `${API_URL}/trails/${id}/summary`

export const getDeviceSummary = async (token, id) =>
  _getJSON(tailsDeviceSummaryUrl(id), token)

export const getDevices = async (token) =>
  _getJSON(SUMMARY_URL, token)

export const postTrails = async (token, id, payload) =>
  _postJSON(trailsUrl(id), token, payload)

export const setDeviceMetadata = async (token, id, meta, type = 'user-meta') =>
  _putJSON(`${DEVS_URL}/${id}/${type}`, token, meta)

export const getDeviceTrails = async (token, id) =>
  _getJSON(trailsUrl(id)+'?progress.status={%22$ne%22:%22%22}', token)
