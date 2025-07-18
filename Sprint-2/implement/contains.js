function contains(input, containsvalues) {
  if (!input || !containsvalues) {
    return false;
  }

  return Object.values(input).includes(containsvalues);

}

module.exports = contains;

