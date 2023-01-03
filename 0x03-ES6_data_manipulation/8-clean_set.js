/* a function that returns a string of all the set values that start with a specific string (startString) */

function cleanSet(set, startString) {
  const newList = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const elem of set) {
    if ((typeof elem === 'string') && (elem.startsWith(startString))) {
      newList.push(elem.slice(startString.length));
    }
  }
  return newList.join('-');
}

export default cleanSet;
