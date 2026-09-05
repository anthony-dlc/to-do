// VERIFICACIONES Y VALIDACIONES

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

function verifyRadioValues(containerName) {
  const radioSelected = document.querySelector(
    `.${containerName} input[type="radio"]:checked`,
  );
  let value;

  if (radioSelected) {
    value = radioSelected.value;
    return value;
  }
}

function verifyTitle() {
  const title = document.querySelector("#task-title");
  const verified = verifyEmptyString(title.value);
  return verified ? title.value : alert("Write a task title");
}

function verifyDescription() {
  const description = document.querySelector("#task-description");
  const verified = verifyEmptyString(description.value);
  return verified ? description.value : alert("Write a task description.");
}

function verifyDate() {
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  let userDate;

  const verifyDay = day.value >= 1 && day.value <= 31;
  const verifyMonth = month.value >= 1 && month.value <= 12;
  const verifyYear = year.value >= new Date().getFullYear();

  if (verifyDay && verifyMonth && verifyYear) {
    userDate = new Date(year.value, month.value - 1, day.value);
    const actualDate = new Date();
    actualDate.setHours(0, 0, 0, 0);
    if (userDate < actualDate) {
      alert("Date in past");
      return;
    } else if (userDate.getTime() === actualDate.getTime()) {
      return "Today";
    } else {
      return `${day.value}/${month.value}/${year.value}`;
    }
  }
  return alert("Add a valid date");
}

function cleanInputs() {
  const inputs = [
    document.querySelector("#task-title"),
    document.querySelector("#task-description"),
    document.querySelector("#day"),
    document.querySelector("#month"),
    document.querySelector("#year"),
  ];

  for (const element of inputs) {
    element.value = "";
  }

  return;
}

export {
  verifyEmptyString,
  verifyNullValues,
  verifyInputs,
  verifyRadioValues,
  verifyTitle,
  verifyDescription,
  verifyDate,
  cleanInputs,
};
