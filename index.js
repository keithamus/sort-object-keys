module.exports = function sortObjectByKeyNameList(object, sortWith = []) {
  let keys = Object.keys(object)

  if (typeof sortWith === 'function') {
    keys = keys.sort(sortWith)
  } else {
    keys = sortWith.concat(keys.sort())
  }

  return Object.fromEntries(keys.map(key => [key, object[key]]))
}
