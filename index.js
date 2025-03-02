var has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

module.exports = function sortObjectByKeyNameList(object, sortWith) {
  var keys;
  var sortFn;

  if (typeof sortWith === 'function') {
    sortFn = sortWith;
  } else {
    keys = sortWith;
  }

  var objectKeys = Object.keys(object);
  return (keys || []).concat(objectKeys.sort(sortFn)).reduce(function(total, key) {
    if (has(object, key)) {
      total[key] = object[key];
    }
    return total;
  }, Object.create(null));
}
