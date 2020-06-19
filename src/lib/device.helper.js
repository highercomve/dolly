import { resolvePath } from './utils.helper'

function getPlatformSelection (platforms) {
  return Object.keys(platforms).reduce((acc, key) => {
    acc[key] = platforms[key].selected
    return acc
  }, {})
}

function mergeSelection (source, destination) {
  return Object.keys(destination).reduce((acc, key) => {
    if (key.indexOf('_config') >= 0) {
      acc[key] = true
    } else if (source[key]) {
      acc[key] = false
    } else {
      acc[key] = destination[key]
    }
    return acc
  }, {})
}

export function getStatePlatforms (state, defaultSelection = false) {
  return Object.keys(state).reduce((acc, key, index) => {
    if (key.indexOf('src.json') >= 0 || key.indexOf('_config') >= 0) {
      const name = key.replace('/src.json', '')
      acc[name] = {
        ...state[key],
        selected: defaultSelection,
        name
      }
    }
    return acc
  }, {})
}

export function getStatePlatformsFiltered (state, platformsSelected = {}, onlyPlatforms = false) {
  const newState = onlyPlatforms ? {} : { ...state }
  Object.keys(platformsSelected).forEach((platformKey) => {
    if (platformsSelected[platformKey] === false && !onlyPlatforms) {
      Object.keys(newState).forEach((stateKey) => {
        if (stateKey.indexOf(platformKey) === 0) {
          delete newState[stateKey]
        }
      })
    }

    if (platformsSelected[platformKey] === true && onlyPlatforms) {
      Object.keys(state).forEach((stateKey) => {
        if (stateKey.indexOf(platformKey) === 0) {
          newState[stateKey] = state[stateKey]
        }
      })
    }
  })
  return newState
}

export function mergeToDestination (src, dest, completeClone = false) {
  if (completeClone) {
    return src
  }
  const srcPlatforms = getPlatformSelection(getStatePlatforms(src, true))
  const destPlatforms = mergeSelection(
    srcPlatforms,
    getPlatformSelection(getStatePlatforms(dest, true))
  )

  const cleanDest = getStatePlatformsFiltered(dest, destPlatforms, false)
  const cleanSrc = getStatePlatformsFiltered(src, srcPlatforms, true)

  const mergedState = {
    ...cleanSrc,
    ...cleanDest
  }

  return mergedState
}

export function getLatestRev (device = {}) {
  return resolvePath(device, 'revisions', []).find(r => r.rev === device.revision)
  // return device.revisions.find(rev => resolvePath(rev, 'progress.status', '') === 'DONE')
}
