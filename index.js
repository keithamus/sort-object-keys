const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

export default function sortObjectByKeyNameList(object, sortWith) {
  let keys, sortFn;

  if (typeof sortWith === 'function') {
    sortFn = sortWith;
  } else {
    keys = sortWith;
  }

  const objectKeys = Object.keys(object);
  return [...(keys ?? []), ...objectKeys.sort(sortFn)].reduce((total, key) => {
    if (has(object, key)) {
      total[key] = object[key];
    }
    return total;
  }, Object.create(null));
}
