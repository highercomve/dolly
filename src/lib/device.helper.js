
export function getStatePlatforms (state, defaultSelection = false) {
  return Object.keys(state).reduce((acc, key, index) => {
    if (key.indexOf('src.json') >= 0) {
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
    if (platformsSelected[platformKey].selected === false && !onlyPlatforms) {
      Object.keys(newState).forEach((stateKey) => {
        if (stateKey.indexOf(platformKey) >= 0) {
          delete newState[stateKey]
        }
      })
    }

    if (platformsSelected[platformKey].selected === true && onlyPlatforms) {
      Object.keys(state).forEach((stateKey) => {
        if (stateKey.indexOf(platformKey) >= 0) {
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

  const destPlatforms = getStatePlatforms(dest)
  const srcPlatforms = getStatePlatforms(src, true)

  const cleanDest = getStatePlatformsFiltered(dest, destPlatforms, false, true)
  const cleanSrc = getStatePlatformsFiltered(src, srcPlatforms, true)

  const mergedState = {
    ...cleanDest,
    ...cleanSrc
  }
  return mergedState
}

export function getLatestRev (device) {
  return device.revisions.find(r => r.rev === device.revision)
  // return device.revisions.find(rev => resolvePath(rev, 'progress.status', '') === 'DONE')
}
