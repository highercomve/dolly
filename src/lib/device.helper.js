
export function getStatePlatforms(state, defaultSelection = false) {
  return Object.keys(state).reduce((acc, key, index) => {
    if (key.indexOf("src.json") >= 0) {
      const name = key.replace("/src.json", "")
      acc[name] = {
        ...state[key],
        selected: defaultSelection,
        name, 
      }
    }
    return acc
  }, {})
}

export function getStatePlatformsFiltered(state, platformsSelected = {}) {
  const newState = { ...state }
  Object.keys(platformsSelected).forEach((platformKey) => {
    if (platformsSelected[platformKey] === false) {
      Object.keys(newState).forEach((stateKey) => {
        if (stateKey.indexOf(platformKey) >= 0) {
          newState[stateKey] = undefined
        }
      })
    }
  })
  return newState
}