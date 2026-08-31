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

function verifyInputs(arr) {
  const values = [];
  for (const element of arr) {
    if (element.value.trim() === "") {
      console.log("fill this campus: " + element.name);
      values = [];
      return false;
    }
    values.push(element.value);
  }
  console.log(values);
  return values;
}

// function verifyObject(el) {
//   for (const key in el) {
//     if (el[key] !== undefined) {
//       return true;
//     }
//   }
// }

export { verifyEmptyString, verifyNullValues, verifyInputs };
