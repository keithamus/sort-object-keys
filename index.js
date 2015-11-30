module.exports = function sortObjectByKeyNameList(object, keys) {
  return (keys || []).concat(Object.keys(object).sort()).reduce((total, key) => {
    total[key] = object[key];
    return total;
  }, Object.create(null));
}
