const defualtSuccessCb = (state, action, successPrefix) => {
  return action.payload
}

export function buildBasicActions (types = {}, actionPrefix = '') {
  return {
    success: (payload) => ({
      type: types[`${actionPrefix}_SUCCESS`],
      payload
    }),
    failure: (error) => ({
      type: types[`${actionPrefix}_FAILURE`],
      error
    }),
    inProgress: () => ({
      type: types[`${actionPrefix}_INPROGRESS`]
    })
  }
}

export function buildBasicReducers (STATES, types, typePrefix, successPrefix, failurePrefix = 'error', successCb = defualtSuccessCb) {
  const INPROGRESS = types[`${typePrefix}_INPROGRESS`]
  const FAILURE = types[`${typePrefix}_FAILURE`]
  const SUCCESS = types[`${typePrefix}_SUCCESS`]
  return {
    [INPROGRESS]: (state, action) => ({
      ...state,
      status: STATES.IN_PROGRESS
    }),
    [FAILURE]: (state, action) => ({
      ...state,
      [`${failurePrefix}`]: action.error,
      status: STATES.FAILURE
    }),
    [SUCCESS]: (state, action) => {
      return !successPrefix
        ? {
          ...state,
          ...successCb(state, action, successPrefix),
          status: STATES.SUCCESS
        } : {
          ...state,
          [successPrefix]: successCb(state, action, successPrefix),
          status: STATES.SUCCESS
        }
    }
  }
}
