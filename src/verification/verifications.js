function verifyEmptyString(str) {
  if (str.trim() === "") {
    console.log("Error");
    throw new Error("Debe ingresar un nombre");
  } else {
    console.log("todo bien");
  }
}

export { verifyEmptyString };
