function verifyEmptyString(str) {
  if (str.trim() !== "") {
    return true;
  }
}

function verifyNullValues(el) {
  if (el !== null) {
    return true;
  }
}

export { verifyEmptyString, verifyNullValues };
