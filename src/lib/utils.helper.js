/**
 * resolvePath for objects
 * @param {*} obj
 * @param {string} path
 * @param {*} defaultReturn
 * @returns *
 */
export function resolvePath (obj, path, defaultReturn) {
  return path.split('.').reduce((prev, curr) =>
    prev && prev.hasOwnProperty(curr) ? prev[curr] : defaultReturn, obj)
}

export function ObjectToArray (obj) {
  return Object.keys(obj).map(key => obj[key])
}
