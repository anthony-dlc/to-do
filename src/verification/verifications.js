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

// function verifyObject(el) {
//   for (const key in el) {
//     if (el[key] !== undefined) {
//       return true;
//     }
//   }
// }

export { verifyEmptyString, verifyNullValues };
